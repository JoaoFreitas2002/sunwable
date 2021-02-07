import {Component, OnInit} from '@angular/core';

import {ProductsService} from "../services/products.service";
import {Inverter} from "../services/inverter";

@Component({
  selector: 'app-inverters',
  templateUrl: './inverters.component.html',
  styleUrls: ['./inverters.component.css']
})
export class InvertersComponent implements OnInit {

  constructor(private productSrv: ProductsService) {
  }

  inverters: Inverter[] = [];

  ngOnInit(): void {
    localStorage.removeItem('id');
    localStorage.removeItem('productType');
    this.AllInverters();
  }

  AllInverters() {
    this.productSrv.getAllInverters().subscribe(data => this.inverters = data);
  }

  ChangeHeighProduct() {
    if (this.inverters.length > 3 && this.inverters.length < 7) {
      return {height: '55%'};
    } else if (this.inverters.length > 6 && this.inverters.length < 10) {
      return {height: '35%'};
    }
  }

  ChangeHeighContainer() {
    if (this.inverters.length > 3 && this.inverters.length < 7) {
      return {height: '700px'};
    } else if (this.inverters.length > 6 && this.inverters.length < 10) {
      return {height: '1100px'};
    }
  }

}
