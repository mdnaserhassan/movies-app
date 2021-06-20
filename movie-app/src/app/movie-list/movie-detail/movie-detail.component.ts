import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {movies} from '../movie-list/movies'
@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
public movieid:string;
public movie:string;
  constructor(private router:Router,  private route: ActivatedRoute) {
    if (this.route.snapshot.paramMap.get('imdbID')) {
      this.movieid = this.route.snapshot.paramMap.get('imdbID');
    }
  }

  ngOnInit() {
   let movie= movies.find(x=>x.imdbID==this.movieid);
    console.log(movie);
    console.log(movies);
    this.movie=JSON.stringify(movie);
  }

}

