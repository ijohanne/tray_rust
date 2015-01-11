//! Defines a BTDF that describes specular transmission

use std::num::Float;
use collect::enum_set::EnumSet;

use linalg::Vector;
use film::Colorf;
use bxdf;
use bxdf::{BxDF, BxDFType};
use bxdf::fresnel;
use bxdf::fresnel::Fresnel;

/// Specular transmission BTDF that implements a specularly transmissive material model
#[derive(Copy, Show)]
pub struct SpecularTransmission {
    /// Color of the transmissited light
    transmission: Colorf,
    /// Fresnel term for the tranmission model, only dielectrics make sense here
    fresnel: fresnel::Dielectric,
}

impl SpecularTransmission {
    /// Create a specularly transmissive BTDF with the color and Fresnel term
    pub fn new(c: &Colorf, fresnel: fresnel::Dielectric) -> SpecularTransmission {
        SpecularTransmission { transmission: *c, fresnel: fresnel }
    }
}

impl BxDF for SpecularTransmission {
    fn bxdf_type(&self) -> EnumSet<BxDFType> {
        let mut e = EnumSet::new();
        e.insert(BxDFType::Specular);
        e.insert(BxDFType::Transmission);
        e
    }
    /// We'll never exactly hit the specular transmission direction with some pair
    /// so this just returns black. Use `sample` instead
    fn eval(&self, _: &Vector, _: &Vector) -> Colorf { Colorf::broadcast(0.0) }
    /// Sampling the specular BTDF just returns the specular transmission direction
    /// for the light leaving along `w_o`
    fn sample(&self, w_o: &Vector) -> (Colorf, Vector) {
        // Select the incident and transmited indices of refraction based on whether
        // we're entering or exiting the material
        let entering = bxdf::cos_theta(w_o) > 0.0;
        let (ei, et) =
            if entering {
                (self.fresnel.eta_i, self.fresnel.eta_t)
            } else {
                (self.fresnel.eta_t, self.fresnel.eta_i)
            };
        let sin_i_sqr = bxdf::sin_theta_sqr(w_o);
        let eta = ei / et;
        let sin_t_sqr = eta * eta * sin_i_sqr;
        // Total internal reflection, nothing is transmitted
        if sin_t_sqr >= 1.0 {
            return (Colorf::broadcast(0.0), Vector::broadcast(0.0));
        }
        let cos_t =
            if entering {
                -Float::sqrt(Float::max(0.0, 1.0 - sin_t_sqr))
            } else {
                Float::sqrt(Float::max(0.0, 1.0 - sin_t_sqr))
            };
        let w_i = Vector::new(eta * -w_o.x, eta * -w_o.y, cos_t);
        let c = (Colorf::broadcast(1.0) - self.fresnel.fresnel(bxdf::cos_theta(w_o)))
            * self.transmission / Float::abs(bxdf::cos_theta(&w_i));
        (c, w_i)
    }
}
