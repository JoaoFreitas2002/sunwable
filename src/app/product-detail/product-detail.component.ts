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

  slides: any = [[]];

  chunk(arr, chunkSize, solarModule) {
    const R = [];
    // tslint:disable-next-line:only-arrow-functions
    const index = arr.map(function(e) {
      return e.id;
    }).indexOf(solarModule.id);
    if (index > -1) {
      arr.splice(index, 1);
    }
    for (let i = 0, len = arr.length; i < len; i += chunkSize) {
      R.push(arr.slice(i, i + chunkSize));
    }
    return R;
  }

  ngOnInit(): void {
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
      this.solarModule = new SolarModule();
      this.GetAllSolarModules();
      this.GetSolarModule();
    } else if (this.productType === 'inverters') {
      this.inverter = new Inverter();
      this.GetAllInverters();
      this.GetInverter();
    }
  }

  GetAllSolarModules() {
    this.productSrv.getAllSolarModules().subscribe(data => this.solarModules = data);
  }

  GetSolarModule() {
    this.productSrv.getSolarModule(this.id).subscribe(data => {
      this.solarModule = data;
      this.slides = this.chunk(this.solarModules, 3, this.solarModule);
    });
  }

  GetAllInverters() {
    this.productSrv.getAllInverters().subscribe(data => this.inverters = data);
  }

  GetInverter() {
    this.productSrv.getInverter(this.id).subscribe(data => {
      this.inverter = data;
      this.slides = this.chunk(this.inverters, 3, this.inverter);
    });
  }

  Activate() {
    document.getElementById('carousel-item').className = 'carousel-item active';
  }

  Activate2() {
    document.getElementById('carousel-item2').className = 'carousel-item active';
  }

  Refresh(id: number) {
    localStorage.setItem('id', String(id));
    window.location.reload();
  }

  ArrowStyle() {
      if (this.slides.length <= 3) {
        return {display: 'none'};
      }
  }

}
