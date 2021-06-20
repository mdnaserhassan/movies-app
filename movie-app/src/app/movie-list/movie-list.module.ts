import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieListComponent } from './movie-list/movie-list.component';
import { RoutingModule } from './movie-list-routing.module';
import {
  GridModule,
  PDFModule,
  ExcelModule,
} from "@progress/kendo-angular-grid";
import { InputsModule } from "@progress/kendo-angular-inputs";
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { DropdownlistfilterComponent } from './dropdownlistfilter/dropdownlistfilter.component';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
@NgModule({
  declarations: [MovieListComponent, MovieDetailComponent, DropdownlistfilterComponent],
  imports: [
    CommonModule,
    GridModule,
    RoutingModule,
    // ChartsModule,
    InputsModule,
    DropDownsModule
  ],
  exports:[MovieListComponent],
  entryComponents:[MovieListComponent]
})
export class MovieListModule { }
