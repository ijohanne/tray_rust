initSidebarItems({"enum":[["Either","Represents a value of one of two possible types."]],"fn":[["split","The `split` function takes arbitrary data and a closure that knows how to split it, and turns this into a `ParallelIterator`."]],"mod":[["internal","Internal traits and functions used to implement parallel iteration. These should be considered highly unstable: users of parallel iterators should not need to interact with them directly. See `README.md` for a high-level overview."]],"struct":[["Chain","`Chain` is an iterator that joins `b` after `a` in one continuous iterator. This struct is created by the [`chain()`] method on [`ParallelIterator`]"],["Cloned","`Cloned` is an iterator that clones the elements of an underlying iterator."],["Enumerate","`Enumerate` is an iterator that returns the current count along with the element. This struct is created by the [`enumerate()`] method on [`ParallelIterator`]"],["Filter","`Filter` takes a predicate `filter_op` and filters out elements that match. This struct is created by the [`filter()`] method on [`ParallelIterator`]"],["FilterMap","`FilterMap` creates an iterator that uses `filter_op` to both filter and map elements. This struct is created by the [`filter_map()`] method on [`ParallelIterator`]."],["FlatMap","`FlatMap` maps each element to an iterator, then flattens these iterators together. This struct is created by the [`flat_map()`] method on [`ParallelIterator`]"],["Fold","`Fold` is an iterator that applies a function over an iterator producing a single value. This struct is created by the [`fold()`] method on [`ParallelIterator`]"],["FoldWith","`FoldWith` is an iterator that applies a function over an iterator producing a single value. This struct is created by the [`fold_with()`] method on [`ParallelIterator`]"],["Inspect","`Inspect` is an iterator that calls a function with a reference to each element before yielding it."],["Map","`Map` is an iterator that transforms the elements of an underlying iterator."],["MapWith","`MapWith` is an iterator that transforms the elements of an underlying iterator."],["MaxLen","`MaxLen` is an iterator that imposes a maximum length on iterator splits. This struct is created by the [`max_len()`] method on [`IndexedParallelIterator`]"],["MinLen","`MinLen` is an iterator that imposes a minimum length on iterator splits. This struct is created by the [`min_len()`] method on [`IndexedParallelIterator`]"],["Rev",""],["Skip","`Skip` is an iterator that skips over the first `n` elements. This struct is created by the [`skip()`] method on [`ParallelIterator`]"],["Split","`Split` is a parallel iterator using arbitrary data and a splitting function. This struct is created by the [`split()`] function."],["Take","`Take` is an iterator that iterates over the first `n` elements. This struct is created by the [`take()`] method on [`ParallelIterator`]"],["WhileSome","`WhileSome` is an iterator that yields the `Some` elements of an iterator, halting as soon as any `None` is produced."],["Zip",""]],"trait":[["FromParallelIterator","`FromParallelIterator` implements the conversion from a [`ParallelIterator`]. By implementing `FromParallelIterator` for a type, you define how it will be created from an iterator."],["IndexedParallelIterator","An iterator that supports \"random access\" to its data, meaning that you can split it at arbitrary indices and draw data from those points."],["IntoParallelIterator",""],["IntoParallelRefIterator",""],["IntoParallelRefMutIterator",""],["ParallelExtend","`ParallelExtend` extends an existing collection with items from a [`ParallelIterator`]."],["ParallelIterator","The `ParallelIterator` interface."]]});