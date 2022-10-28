import { map, reduce, filter } from 'rxjs/operators';
import { from } from 'rxjs';

const numbers$ = from([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]).pipe(
  /* MAP */
  /* map((number) => number * 2),
  map((number) => number / 2)*/

  /* REDUCE */
  /*reduce((acc, number) => acc + number, 0 /* valor inicial )*/

  /* FILTER */
  filter((number) => number > 4)
);

numbers$.subscribe(console.log);
