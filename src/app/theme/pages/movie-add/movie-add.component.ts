import { ADD_MOVIE } from '../../../store/actions/movie.actions';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { Movie } from '../../../service/model/movie.model';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material/bottom-sheet';

@Component({
  selector: '.content',
  templateUrl: 'movie-add.component.html',
})
export class MovieAddComponent implements OnInit {

  movieForm: FormGroup;

  submitted = false;

  selectedTheme$
  
  constructor(private fb: FormBuilder, private store: Store<any>, private dialog: MatBottomSheet) {
    this.selectedTheme$ = this.store.pipe(select('layout', 'theme'));
  }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.movieForm = this.fb.group({
      type: ['', Validators.required],
      name: ['', Validators.required],
      rate: ['' , [Validators.required, Validators.min(0), Validators.max(10)]],
      year: ['']
    })
  }

  onSubmit() {
    this.submitted = true;
    if (this.movieForm.valid) {
      console.log('form submitted');
      const movie: Movie = { ...this.movieForm.value, id: new Date().getTime()}
      this.store.dispatch({type: ADD_MOVIE, payload: movie})
      this.openDialog();
      this.submitted = false;
      this.movieForm.reset();
    }
  }

  openDialog(): void {
    this.dialog.open(SuccessDialogComponent);
  }
}

@Component({
  selector: 'aps-dialog-success',
  template: `
      <div class="dialog dialog--success"> 
        <div> <mat-icon>check_circle_outline</mat-icon> </div>
        <div class="message"> <h1> Kaydedildi </h1> </div>
        <div class="action-buttons"> 
          <button mat-raised-button [color]="selectedTheme$ | async" (click)="closeDialog($event)">
            Tamam
          </button>
        </div>
      </div>
  `
})
export class SuccessDialogComponent {
  selectedTheme$;
  constructor(
    private dialogRef: MatBottomSheetRef<SuccessDialogComponent>,
    private store: Store<any>,
  ) {
    this.selectedTheme$ = this.store.pipe(select('layout', 'theme'));
  }

  closeDialog(event: MouseEvent): void {
    this.dialogRef.dismiss();
    event.preventDefault();
  }
}
