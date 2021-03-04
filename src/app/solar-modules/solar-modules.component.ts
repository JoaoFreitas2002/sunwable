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
    localStorage.removeItem('id');
    localStorage.removeItem('productType');
    this.AllSolarModules();
  }

  AllSolarModules() {
    this.productSrv.getAllSolarModules().subscribe(data => this.solarModules = data);
  }

}
