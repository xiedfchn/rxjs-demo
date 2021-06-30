import { combineLatest, forkJoin, from, interval, of, merge, pipe, timer} from 'rxjs';

import { delay, map, mergeMap, pairwise, switchMap, debounceTime } from 'rxjs/operators';

// of(1, 2, 3).subscribe(console.log);

// from([1,2,3]).subscribe(console.log);

// interval(1000).subscribe(console.log);

// timer( 1000, 4000).subscribe(console.log);

// const timer1 = timer(0, 1000);
// const timer2 = timer(500, 1000);
// combineLatest([timer1, timer2]).subscribe(console.log)

// const observable = forkJoin({
//   foo: of(1, 2, 3, 4),
//   bar: Promise.resolve(8),
//   baz: timer(4000),
// });
// observable.subscribe({
//  next: value => console.log(value),
//  complete: () => console.log('This is how it ends!'),
// });


// const timer1 = interval(1000)
// const timer2 = interval(500)
// const timer3 = interval(2000)
// const clicksOrTimer = merge(timer1, timer2, timer3);
// clicksOrTimer.subscribe(console.log);


// interval(1000).pipe(map(value => value + 1000)).subscribe(console.log)


// const letters = of('a', 'b', 'c');
// const result = letters.pipe(
//   mergeMap(x => interval(1000).pipe(map(i => x+i))),
// ).subscribe(console.log);


// const switched = of(1, 2, 3).pipe(mergeMap((x) => of(x, x ** 2, x ** 3)));
// switched.subscribe(x => console.log(x));

timer(0, 1000).pipe(debounceTime(900)).subscribe(console.log);



// of('a','b','c').pipe(pairwise()).subscribe(console.log)

// of(1).pipe(delay(2000)).subscribe(console.log)