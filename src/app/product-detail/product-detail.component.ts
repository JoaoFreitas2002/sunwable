import {Component, HostListener, OnInit} from '@angular/core';

import {SolarModule} from "../services/solarModule";
import {Inverter} from "../services/inverter";
import {ProductsService} from "../services/products.service";
import {Characteristic} from "../services/website/characteristic";
import {WebsiteService} from "../services/website/website.service";

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  constructor(private productSrv: ProductsService,
              private websiteSrv: WebsiteService) {
  }

  solarModule: SolarModule;
  solarModules: SolarModule[] = [];
  characteristic: Characteristic;

  inverter: Inverter;
  inverters: Inverter[] = [];

  productType: string;
  id: number;
  activate = false;

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
    this.characteristic = new Characteristic();
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
      this.GetCharacteristics();
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
      this.OnWindowWidth();
    });
  }

  @HostListener('window:resize', [])
  OnWindowWidth() {
    const ScreanWidth = window.screen.width;
    let size: number;
    if (ScreanWidth >= 576 && ScreanWidth < 768) {
      size = 2;
    } else if (ScreanWidth >= 768) {
      size = 3;
    } else if (ScreanWidth < 576) {
      size = 1;
    }
    this.slides = this.chunk(this.solarModules, size, this.solarModule);
  }

  GetCharacteristics() {
    this.websiteSrv.GetCharacteristic().subscribe(data => this.characteristic = data[0]);
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

  Refresh(id: number) {
    localStorage.setItem('id', String(id));
    window.location.reload();
  }

  ArrowStyle() {
    if (this.productType === 'solarModule') {
      if (this.solarModules.length <= 3) {
        return {display: 'none'};
      }
    } else if (this.productType === 'inverters') {
      if (this.inverters.length <= 3) {
        return {display: 'none'};
      }
    }
  }

}
