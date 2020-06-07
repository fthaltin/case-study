import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';

@NgModule({
  exports: [
    HeaderComponent
  ],
  declarations: [
    HeaderComponent
  ],
  imports: [
    // RouterModule,
    CommonModule, MatSelectModule, MatButtonModule, MatIconModule, RouterModule
  ],
})
export class HeaderModule { }
