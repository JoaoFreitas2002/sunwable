import {Component, OnInit} from '@angular/core';

import {ProductsService} from '../services/products.service';
import {Product} from '../services/product';

@Component({
  selector: 'app-solar-modules',
  templateUrl: './solar-modules.component.html',
  styleUrls: ['./solar-modules.component.css']
})
export class SolarModulesComponent implements OnInit {

  constructor(private productSrv: ProductsService) {
  }

  products: Product[] = [];

  ngOnInit(): void {
    this.All();
  }

  All() {
    this.productSrv.getAll().subscribe(dados => {
      // @ts-ignore
      console.log(dados.records);
    });
  }

}
