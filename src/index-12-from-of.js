import { from, of } from 'rxjs';

const fruits$ = from(['apple', 'orange', 'banana', 'kiwi', 'melon']);

fruits$.subscribe(console.log);

const numbers$ = of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

of.subscribe(console.log);
