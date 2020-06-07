import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MovieListComponent, WarningDialogComponent } from './movie-list.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';

const routes: Routes = [
  {
    path: '',
    component: MovieListComponent
  }
];

@NgModule({
  exports: [
    MovieListComponent, WarningDialogComponent
  ],
  declarations: [
    MovieListComponent, WarningDialogComponent
  ],
  imports: [
    RouterModule.forChild(routes), CommonModule, MatIconModule, MatButtonModule, MatPaginatorModule, MatBottomSheetModule
  ],
})
export class MovieListModule { }
