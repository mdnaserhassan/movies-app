import { Component, OnInit, ViewChild } from '@angular/core';
import { DataBindingDirective } from '@progress/kendo-angular-grid';
import {movies} from './movies'
import { process } from "@progress/kendo-data-query";
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  constructor(private router:Router,  private route: ActivatedRoute) { }

  @ViewChild(DataBindingDirective) dataBinding: DataBindingDirective;
  public gridData: any[] = movies;
  public gridView: any[];

  public mySelection: string[] = [];

  public ngOnInit(): void {
    this.gridView = this.gridData;
  }

  public onFilter(inputValue: string): void {
    this.gridView = process(this.gridData, {
      filter: {
        logic: "or",
        filters: [
          {
            field: "Title",
            operator: "contains",
            value: inputValue,
          },
          {
            field: "Language",
            operator: "contains",
            value: inputValue,
          },
          {
            field: "listingType",
            operator: "contains",
            value: inputValue,
          },
          {
            field: "imdbRating",
            operator: "contains",
            value: inputValue,
          },
        ],
      },
    }).data;

    this.dataBinding.skip = 0;
  }
  EditMovie(dataitem:any):any{

    this.router.navigate(['/movielist/moviedetail']);

  }



}
