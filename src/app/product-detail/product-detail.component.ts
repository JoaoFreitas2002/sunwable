import {Component, OnInit} from '@angular/core';

import {SolarModule} from "../services/solarModule";
import {Inverter} from "../services/inverter";
import {ProductsService} from "../services/products.service";

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  constructor(private productSrv: ProductsService) {
  }

  solarModule: SolarModule;
  solarModules: SolarModule[] = [];

  inverter: Inverter;
  inverters: Inverter[] = [];

  productType: string;

  id: number;

  ngOnInit(): void {
    this.solarModule = new SolarModule();
    this.inverter = new Inverter();
    this.SeeProductType();
  }

  SeeProductType() {
    if (localStorage.getItem('productType') === null) {
      this.productType = history.state.data.data2;
      localStorage.setItem('productType', this.productType);
      this.id = history.state.data.data1;
      localStorage.setItem('id', String(this.id));
    } else {
      this.productType = localStorage.getItem('productType');
      this.id = Number(localStorage.getItem('id'));
    }
    if (this.productType === 'solarModules') {
      this.GetAllSolarModules();
      this.GetSolarModule();
    } else if (this.productType === 'inverters') {
      this.GetAllInverters();
      this.GetInverter();
    }
  }

  GetAllSolarModules() {
    this.productSrv.getAllSolarModules().subscribe(data => this.solarModules = data);
  }

  GetSolarModule() {
    this.productSrv.getSolarModule(this.id).subscribe(data => this.solarModule = data);
  }

  GetAllInverters() {
    this.productSrv.getAllInverters().subscribe(data => this.inverters = data);
  }

  GetInverter() {
    this.productSrv.getInverter(this.id).subscribe(data => this.inverter = data);
  }

  ngIF(id: number) {
    if (id === this.solarModule.id) {
      return {display: 'none'};
    }
  }

}
