// services
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// interface
import { Product }    from './../interfaces/product';

// rxjs
import { Observable } from 'rxjs';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { map }        from 'rxjs/operators';
import { tap }        from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  productUrl: string = 'assets/api/produts/products.json';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.productUrl);
  }
}
