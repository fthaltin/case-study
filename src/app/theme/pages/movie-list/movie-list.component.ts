import { Component, Inject, Output } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { REMOVE_MOVIE } from '../../../store/actions/movie.actions';
import { Movie } from '../../../service/model/movie.model';

import { MatBottomSheet, MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { MAT_BOTTOM_SHEET_DATA } from '@angular/material/bottom-sheet';

@Component({
  selector: '.content',
  templateUrl: './movie-list.component.html',
})
export class MovieListComponent {

  movieList: Movie[] = [];

  movieListTemp: Movie[] = [];

  constructor(private store: Store<any>, private dialog: MatBottomSheet) {
    this.getMovies();
    this.onFilter();
    this.onSort();
  }

  getMovies() {
    this.store.select('movie', 'movieList').subscribe(res => {
      this.movieList = res;
      this.movieListTemp = res;
    })
  }

  onFilter() {
    this.store.select('movie', 'filterType').subscribe(filterType => {
      if (filterType == 'all') {
        this.getMovies();
      } else {
        this.movieList = this.movieListTemp.filter(item => item.type == filterType);
      }
    })
  }

  onSort() {
    this.store.select('movie', 'sortingType').subscribe(sortingType => {
      if (sortingType == 'asc') {
        this.movieList = this.movieList.slice().sort((a, b) => a.rate - b.rate);
      }
      if (sortingType == 'desc') {
        this.movieList = this.movieList.slice().sort((a, b) => b.rate - a.rate);
      }
    })
  }

  trackMethod(index, item) {
    return item.id;
  }

  removeMovie(item: Movie) {
    this.dialog.open(WarningDialogComponent, { data: item });
  }

  onPageChange(event) {}
}


@Component({
  selector: 'aps-dialog-warning',
  template: `
    <div class="dialog dialog--warning"> 
      <div> <mat-icon >delete</mat-icon> </div>
      <div class="message"> <h1> {{data.name}} {{data.year ? '(' + data.year + ')' : ''}} {{ data.type == 'film' ? 'Filmini': 'TV Serisini'}} Silmek istediğine emin misin?  </h1> </div>
      <div class="action-buttons"> 
        <button mat-raised-button class="mr-3" (click)="closeDialog($event)">
          iptal
        </button>
        <button mat-raised-button [color]="selectedTheme$ | async" (click)="confirm()">
          Evet
        </button>
      </div>
    </div>
  `
})
export class WarningDialogComponent {
  selectedTheme$;
  constructor(
    private dialogRef: MatBottomSheetRef<WarningDialogComponent>, 
    private store: Store<any>,
    @Inject(MAT_BOTTOM_SHEET_DATA) public data: any,
  ) {
    this.selectedTheme$ = this.store.pipe(select('layout', 'theme'));
  }

  closeDialog(event: MouseEvent): void {
    this.dialogRef.dismiss();
    event.preventDefault();
  }

  confirm() {
     this.store.dispatch({type: REMOVE_MOVIE, payload: this.data.id});
     this.dialogRef.dismiss();
  }
}
