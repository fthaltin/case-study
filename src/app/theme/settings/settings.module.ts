import { SettingsComponent } from './settings.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@NgModule({
  exports: [
    SettingsComponent
  ],
  declarations: [
    SettingsComponent
  ],
  imports: [
    CommonModule, MatSelectModule, MatButtonModule, MatIconModule
  ],
})
export class SettingsModule { }
