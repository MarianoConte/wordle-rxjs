import { Observable } from 'rxjs';

const observableAlfa$ = new Observable((suscriber) => {
  suscriber.next(1);
  suscriber.next(2);
  suscriber.next(3);
  suscriber.next(4);
  suscriber.next(5);
  //suscriber.error('Error');
  suscriber.complete();
});

const observador = {
  next: (value) => {
    console.log(value);
  },
  complete: () => {
    console.log('Complete');
  },
  error: (error) => {
    console.error(error);
  },
};

observableAlfa$.subscribe(observador);
