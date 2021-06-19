import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

const routes = [

  {
    path: 'movielist', loadChildren:()=>import('../app/movie-list/movie-list.module').then(x=>x.MovieListModule),
    text:'Movies',
    icon: "k-i-cloud",
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
