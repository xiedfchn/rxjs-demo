# rxjs-demo

## Operators
### Creation Operators
- of -  converts the arguments to an observable sequence.
- from - creates an Obserbale from an array, an array-like object, a Promise, an iterable object, or an Observable-like object.
- timer - creates an Observable that emits sequential numbers every specified interval of time, on a specified SchedulerLike.

- combineLatest - Combines multiple Observables to create an Observable whose values are calculated from the latest values of each of its input Observables.
- forkJoin - Combines multiple Observables to create an Observable. Wait for Observables to complete and then combine last values they emmitted.
- merge - Creates an output Observable which concurrently emits all values from every given input Observable.

### Transformation Operators
- map - Applies a given project function to each value emitted by the source Observable, and emits the resulting values as an Observable.
- mapTo - Emits the given constant value on the output Observable every time the source Observable emits a value.
- mergeMap - Projects each source value to an Observable which is merged in the output Observable.
- pairWise - Groups pairs of consecutive emissions together and emits them as an array of two values.
- switchMap - Projects each source value to an Observable which is merged in the output Observable, emitting values only from the most recently projected Observable.

### Filtering Operators
Emits a notification from the source Observable only after a particular time span has passed without another source emission.
- debounceTime - emits a notification from the source Observable only after a particular time span has passed without another source emission.
- distinct
- takeUntil
### Utility Operators
- tap - Used to perform side-effects for notifications from the source observable
- delay - Delays the emission of items from the source Observable by a given timeout or until a given Date
