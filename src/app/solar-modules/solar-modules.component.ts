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
    this.ChangeHeigh();
  }

  AllSolarModules() {
    this.productSrv.getAllSolarModules().subscribe(data => this.solarModules = data);
  }

  ChangeHeigh() {
    if (this.solarModules.length > 3 && this.solarModules.length < 7) {
      document.getElementById('container2').style.height = '700px';
      document.getElementById('product').style.height = '55%';
    }
  }

}
