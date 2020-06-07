import { SettingsModule } from './theme/settings/settings.module';
import { HeaderModule } from './theme/header/header.module';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { LayoutModule } from './layout/layout.module';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { movieReducer } from './store/reducers/movie.reducer';
import { layoutReducer } from './store/reducers/layout.reducer';
import { HeaderComponent } from './theme/header/header.component';
// import { ThemeComponent } from './theme/theme.component';
// import { ThemeRoutingModule } from './theme/theme.routing';

@NgModule({
  declarations: [
    AppComponent, 
    // ThemeComponent
    // HeaderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    // LayoutModule,
    StoreModule.forRoot({movie: movieReducer, layout: layoutReducer }),
    StoreDevtoolsModule.instrument(),
    // ThemeRoutingModule
    HeaderModule,
    SettingsModule,
    AppRoutingModule, RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
