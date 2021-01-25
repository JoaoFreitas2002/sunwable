import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {SolarModule} from './solarModule';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  solarModulesUrl = 'http://127.0.0.1:8000/products/solarModules/';


  constructor(private http: HttpClient) {
  }

  getAllSolarModules() {
    return this.http.get<SolarModule[]>(this.solarModulesUrl);
  }
}
