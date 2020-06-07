import { Component, ViewEncapsulation, ViewChild, ElementRef } from '@angular/core';
import { Store } from '@ngrx/store';
import { CHANGE_THEME_MODE } from './../../store/actions/layout.actions';

@Component({
  selector: 'aps-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SettingsComponent {
  currentPage = null;

  filtertype;

  sortingType;

  selectedTheme;

  @ViewChild('settings') settingsEl: ElementRef;

  constructor( private store: Store<any>) {
    this.store.select('layout', 'theme').subscribe(res => {
      this.selectedTheme = res;
    })
  }

  setAsDefaultTheme(theme) {
    this.store.dispatch({type: CHANGE_THEME_MODE, payload: theme });
  }

  toggle() {
    this.settingsEl.nativeElement.classList.toggle('opened');
  }
}
