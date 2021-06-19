import { Component, OnInit, ViewChild } from '@angular/core';
import { DataBindingDirective, DataStateChangeEvent, GridDataResult ,GridComponent} from '@progress/kendo-angular-grid';
import {movies} from './movies'
import { process, State } from "@progress/kendo-data-query";
import { ActivatedRoute, Router } from '@angular/router';
const distinct = (data) =>
  data
    .map((x) =>({key:x.Location,Location:x.Location}))
    .filter(
      (x, idx, xs) =>
        xs.findIndex((y) => y.key === x.key) === idx
    );
    const distinctLanguage = (data) =>
  data
    .map((x) =>({key:x.Language,Language:x.Language}))
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
  public distinctLocation: any[] = distinct(movies);
  public distinctLanguage: any[] = distinctLanguage(movies);
  constructor(private router:Router,  private route: ActivatedRoute) { }

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
  public gridData: GridDataResult = process(movies, this.state);
  public gridView: any[];

  public mySelection: string[] = [];

  public ngOnInit(): void {
    // this.gridView = this.gridData;
  }

  EditMovie(dataitem:any):any{

    this.router.navigate([`/movielist/moviedetail/${dataitem.imdbID}`]);

  }
  public dataStateChange(state: DataStateChangeEvent): void {
    this.state = state;
    this.gridData = process(movies, this.state);
  }



}
