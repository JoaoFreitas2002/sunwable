import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Product} from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  productsUrl = 'https://joaofreitas.knack.com/sunwable/objects/object_1/records?format=raw';

  constructor(private http: HttpClient) {
  }

  getAll() {
    return this.http.get<Product[]>(this.productsUrl);
  }
}
