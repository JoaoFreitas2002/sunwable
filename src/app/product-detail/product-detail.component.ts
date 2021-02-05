import {Component, OnInit} from '@angular/core';

import {SolarModule} from "../services/solarModule";
import {Inverter} from "../services/inverter";

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  constructor() {
  }

  solarModule: SolarModule;
  solarModules: SolarModule[] = [];

  inverter: Inverter;
  inverters: Inverter[] = [];

  productType: string;

  ngOnInit(): void {
    this.SeeProductType();
  }

  SeeProductType() {
    if (localStorage.getItem('productType') === null) {
      this.productType = history.state.data.data3;
      localStorage.setItem('productType', this.productType);
    } else {
      this.productType = localStorage.getItem('productType');
    }
    if (localStorage.getItem('product') === null) {
      if (this.productType === 'solarModules') {
        this.solarModule = history.state.data.data1;
        localStorage.setItem('product', JSON.stringify(this.solarModule));
        this.solarModules = history.state.data.data2;
        localStorage.setItem('productArray', JSON.stringify(this.solarModules));
      } else if (this.productType === 'inverters') {
        this.inverter = history.state.data.data1;
        localStorage.setItem('product', JSON.stringify(this.inverter));
        this.inverters = history.state.data.data2;
        localStorage.setItem('productArray', JSON.stringify(this.inverters));
      }
    } else {
      if (this.productType === 'solarModules') {
        this.solarModule = JSON.parse(localStorage.getItem('product'));
        this.solarModules = JSON.parse(localStorage.getItem('productArray'));
      } else if (this.productType === 'inverters') {
        this.inverter = JSON.parse(localStorage.getItem('product'));
        this.inverters = JSON.parse(localStorage.getItem('productArray'));
      }
    }

  }

}
