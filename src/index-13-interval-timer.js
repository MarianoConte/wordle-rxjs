import { interval, timer } from 'rxjs';

const sequenceNumbers$ = interval(1000);

sequenceNumbers$.subscribe(console.log);

const delayedTimer$ = timer(3000);

delayedTimer$.subscribe(console.log);
