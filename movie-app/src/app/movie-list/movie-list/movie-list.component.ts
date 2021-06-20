import { Component, OnInit, ViewChild } from '@angular/core';
import { DataBindingDirective, DataStateChangeEvent, GridDataResult ,GridComponent} from '@progress/kendo-angular-grid';
// import {movies} from './movies'
import { process, State } from "@progress/kendo-data-query";
import { ActivatedRoute, Router } from '@angular/router';
import { MovielistService } from './movielist.service';
import { Movie } from '../movie';
const distinct = (data) =>
  data
    .map((x) =>({key:x.location,location:x.location}))
    .filter(
      (x, idx, xs) =>
        xs.findIndex((y) => y.key === x.key) === idx
    );
    const distinctLanguage = (data) =>
  data
    .map((x) =>({key:x.language,language:x.language}))
    .filter(
      (x, idx, xs) =>
        xs.findIndex((y) => y.key === x.key) === idx
    );
@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})

export class MovieListComponent implements OnInit {
  public movies:Movie[];
  public distinctLocation: any[] = null

  public distinctLanguage: any[] = null;
  constructor(private router:Router,  private route: ActivatedRoute,
    private http:MovielistService
    ) { }

  @ViewChild(DataBindingDirective) dataBinding: DataBindingDirective;
  public state: State = {
    skip: 0,
    take: 5,
    // Initial filter descriptor
    filter: {
      logic: "and",
      filters: [],
    },
  };
  // public gridData: GridDataResult = process(movies, this.state);
  public gridData: GridDataResult = null;
  public gridView: any[];

  public mySelection: string[] = [];

  public ngOnInit(): void {
      this.http.getMovies().subscribe(res=>{
        this.movies=res;
        this.gridData=process(this.movies, this.state);
        this.distinctLocation = distinct(this.movies);

        this.distinctLanguage= distinctLanguage(this.movies);
      });
  }

  EditMovie(dataitem:any):any{

    this.router.navigate([`/movielist/moviedetail/${dataitem.imdbID}`]);

  }
  public dataStateChange(state: DataStateChangeEvent): void {
    this.state = state;
    this.gridData = process(this.movies, this.state);
  }



}
