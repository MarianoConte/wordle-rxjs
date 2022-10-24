import { fromEvent } from 'rxjs';

const onKeyDown$ = fromEvent(document, 'keydown');

const observadorMouse = {
  next: (event) => {
    console.log(event);
  },
  complete: () => {},
  error: () => {},
};

onKeyDown$.subscribe(observadorMouse);
