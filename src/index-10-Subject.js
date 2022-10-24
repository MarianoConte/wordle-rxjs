//Subjects
import { Observable, Subject } from 'rxjs';

const numbers$ = new Observable((suscriber) => {
  suscriber.next(Math.round(Math.random() * 100));
});

const numbersRandom$ = new Subject();

const observador1 = {
  next: (number) => {
    console.log(number);
  },
};

const observador2 = {
  next: (number) => {
    console.log(number);
  },
};

numbersRandom$.subscribe(observador1);
numbersRandom$.subscribe(observador2);

numbers$.subscribe(numbersRandom$);

//numbersRandom$.next(Math.round(Math.random() * 100));
