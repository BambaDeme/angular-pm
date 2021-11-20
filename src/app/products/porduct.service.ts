import { Injectable } from '@angular/core';
import { IProduct } from './products';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, pipe, throwError } from 'rxjs';
import { tap, catchError } from'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class PorductService {

  private productUrl = "http://localhost:3000/products";
  constructor(private http: HttpClient) { }

  getProducts(): Observable<IProduct[]>{
    return this.http.get<IProduct[]>(this.productUrl).
          pipe(
            tap(data => console.log('All ',JSON.stringify(data))),
            catchError(this.handleError)
          );
  }

  getProductById(productId: number) :Observable<IProduct>{
    return this.http.get<IProduct>(this.productUrl+`/${productId}`)
    .pipe(
      tap(data => console.log(`Product ${productId}: `,JSON.stringify(data))),
      catchError(this.handleError)
    );
  }
  handleError(handleError: HttpErrorResponse){
    return throwError(handleError) ;
  }
}
