import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieListComponent } from './movie-list/movie-list.component';
import { RoutingModule } from './movie-list-routing.module';

@NgModule({
  declarations: [MovieListComponent],
  imports: [
    CommonModule,
    RoutingModule
  ],
  exports:[MovieListComponent],
  entryComponents:[MovieListComponent]
})
export class MovieListModule { }
