import {Component, OnInit} from '@angular/core';

import {ProductsService} from '../services/products.service';
import {SolarModule} from '../services/solarModule';

@Component({
  selector: 'app-solar-modules',
  templateUrl: './solar-modules.component.html',
  styleUrls: ['./solar-modules.component.css']
})
export class SolarModulesComponent implements OnInit {

  constructor(private productSrv: ProductsService) {
  }

  solarModules: SolarModule[] = [];

  ngOnInit() {
    this.AllSolarModules();
  }

  AllSolarModules() {
    this.productSrv.getAllSolarModules().subscribe(data => this.solarModules = data);
  }

  ChangeHeighProduct() {
    if (this.solarModules.length > 3 && this.solarModules.length < 7) {
      return {height: '55%'};
    } else if (this.solarModules.length > 6 && this.solarModules.length < 10) {
      return {height: '35%'};
    }
  }

  ChangeHeighContainer() {
    if (this.solarModules.length > 3 && this.solarModules.length < 7) {
      return {height: '700px'};
    } else if (this.solarModules.length > 6 && this.solarModules.length < 10) {
      return {height: '1100px'};
    }
  }

}
