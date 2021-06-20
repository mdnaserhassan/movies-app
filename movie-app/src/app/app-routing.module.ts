import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

const routes = [
  {
    path: '', redirectTo:'home',
    text:'',pathMatch: 'full',
    icon: "k-i-globe-outline",
  },
  {
    path: 'home', component:HomeComponent,
    text:'Home',
    icon: "k-i-globe-outline",
  },
  {
    path: 'movielist', loadChildren:()=>import('../app/movie-list/movie-list.module').then(x=>x.MovieListModule),
    text:'Movies',
    icon: "k-i-film",
  },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
