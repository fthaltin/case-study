import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'movie-list',
    loadChildren: () => import('./theme/pages/movie-list/movie-list.module').then((m) => m.MovieListModule),
  },
  {
    path: 'movie-add',
    loadChildren: () => import('./theme/pages/movie-add/movie-add.module').then((m) => m.MovieAddModule),
  },
  {path: '', redirectTo: 'movie-list', pathMatch: 'full'}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
