import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Product} from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  productsUrl = 'https://joaofreitas.knack.com/sunwable/objects/object_1/records?format=raw';


  headers = {
    'Content-Type': 'application/json',
    'X-Knack-Application-Id': '5fea4ffb19b7ce001e17d628',
    'X-Knack-REST-API-KEY': '06632f5d-9de1-4e7c-8e85-491e950f2733'
  };

  constructor(private http: HttpClient) {
  }

  getAll() {
    return this.http.get<Product[]>(this.productsUrl, {headers: this.headers});
  }
}
