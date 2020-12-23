// services
import { Injectable }        from '@angular/core';
import { HttpClient }        from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';

// interface
import { Product }           from './../interfaces/product';

// rxjs
import { Observable }        from 'rxjs';
import { throwError }        from 'rxjs';
import { catchError }        from 'rxjs/operators';
import { map }               from 'rxjs/operators';
import { tap }               from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  productUrl: string = 'assets/api/products/products.json';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.productUrl)
      .pipe(
        // log item to console
        tap((product) => {
          console.table(product);
        }),
        // catch error
        catchError(this.handleError)
      );
  }

  handleError(errorObject: HttpErrorResponse) {
    let errorMessage: string = '';

    if (errorObject.error instanceof ErrorEvent) {
      // client-side error
      errorMessage = `Client-Side Error occurred: ${errorObject.error.message}`;
    } else {
      // server-side error
      errorMessage = `Server-Side Error occurred: Http Response Code ${errorObject.status}, error message: ${errorObject.message}`;
    }

    // log error to console
    console.error(errorMessage);

    // throw error
    return throwError(errorMessage);
  }
}
