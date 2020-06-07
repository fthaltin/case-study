import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRadioModule } from '@angular/material/radio';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';

import { MovieAddComponent, SuccessDialogComponent } from './movie-add.component';

const routes: Routes = [
  {
    path: '',
    component: MovieAddComponent
  }
];
 

@NgModule({
  exports: [
    MovieAddComponent, SuccessDialogComponent
  ],
  declarations: [
    MovieAddComponent, SuccessDialogComponent
  ],
  imports: [
    RouterModule.forChild(routes), CommonModule, FormsModule, ReactiveFormsModule, MatRadioModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatBottomSheetModule, MatIconModule
  ]
})
export class MovieAddModule { }
