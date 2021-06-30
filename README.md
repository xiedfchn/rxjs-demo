# rxjs-demo

## Operators
### Creation Operators
- of -  converts the arguments to an observable sequence.
- from - creates an Obserbale from an array, an array-like object, a Promise, an iterable object, or an Observable-like object.
- timer - creates an Observable that emits sequential numbers every specified interval of time, on a specified SchedulerLike.

- combineLatest - Combines multiple Observables to create an Observable whose values are calculated from the latest values of each of its input Observables.
- forkJoin - Combines multiple Observables to create an Observable. Wait for Observables to complete and then combine last values they emmitted.
- merge - Creates an output Observable which concurrently emits all values from every given input Observable.
