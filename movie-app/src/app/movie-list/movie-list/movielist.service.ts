import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Movie } from '../movie';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class MovielistService {
  endPoint = '/api';

  constructor(private httpClient: HttpClient) { }
  getMovies(): Observable<Movie[]> {
    return this.httpClient.get<Movie[]>(this.endPoint )
    .pipe(retry(1),catchError(this.httpError))
  }
  httpError(error) {
    let msg = '';
    if(error.error instanceof ErrorEvent) {
      // client side error
      msg = error.error.message;
    } else {
      // server side error
      msg = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(msg);
    return throwError(msg);
  }
}


