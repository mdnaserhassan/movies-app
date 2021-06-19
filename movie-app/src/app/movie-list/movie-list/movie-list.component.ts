import { Component, OnInit, ViewChild } from '@angular/core';
import { DataBindingDirective, DataStateChangeEvent, GridDataResult } from '@progress/kendo-angular-grid';
import {movies} from './movies'
import { process, State } from "@progress/kendo-data-query";
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

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
