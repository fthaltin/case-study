import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { GET_FROM_STORAGE } from './store/actions/movie.actions';

@Component({
  selector: 'body',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'APSIYON';

  constructor(private store: Store<any>) {
    this.getMoviesFromLocalStorage();
  }

  getMoviesFromLocalStorage() {
    const movies = localStorage.getItem('movieList');
    if(movies) {
      this.store.dispatch({ type: GET_FROM_STORAGE, payload: JSON.parse(movies)})
    }
  }
}
