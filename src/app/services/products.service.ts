import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {SolarModule} from './solarModule';
import {Inverter} from './inverter';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  solarModulesUrl = 'https://joaofreitas2002.pythonanywhere.com/pt/products/solarModules/';
  invertersUrl = 'https://joaofreitas2002.pythonanywhere.com/pt/products/inverters/';


  constructor(private http: HttpClient) {
  }

  getAllSolarModules() {
    return this.http.get<SolarModule[]>(this.solarModulesUrl);
  }

  getSolarModule(id: number) {
    return this.http.get<SolarModule>(this.solarModulesUrl + id);
  }

  getAllInverters() {
    return this.http.get<Inverter[]>(this.invertersUrl);
  }

  getInverter(id: number) {
    return this.http.get<Inverter>(this.invertersUrl + id);
  }
}
