import { CHANGE_FILTER_TYPE, CHANGE_SORTING_TYPE } from '../../store/actions/movie.actions';
import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, NavigationStart, ActivatedRoute } from '@angular/router';
import { Store, select } from '@ngrx/store';

@Component({
  selector: 'aps-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  currentPage = null;

  filtertype;

  sortingType;

  selectedTheme$;

  constructor(private router: Router, private store: Store<any>) {
    this.router.events.subscribe(val => {
      if ( val instanceof NavigationEnd ) {
        if (val.url == '/movie-list' || val.url == '/') {
          this.currentPage = 'movieList'
        } else {
          this.currentPage = null
        }
      }
    })

    this.selectedTheme$ = this.store.pipe(select('layout', 'theme'));
    
  }

  onFilter($event) {
    this.store.dispatch({type: CHANGE_FILTER_TYPE, payload: this.filtertype});
  }

  onSort($event) {
    this.store.dispatch({type: CHANGE_SORTING_TYPE, payload: this.sortingType});
  }
}
