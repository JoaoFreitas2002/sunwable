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

  // products: Product[] = [];
  // product: Product;

  ngOnInit(): void {
  }

  // All() {
  //   this.productSrv.getAll().subscribe(dados => {
  //     // @ts-ignore
  //     console.log(dados.records);
  //     // @ts-ignore
  //     console.log(dados.records.length.field_1);
  //     // this.product.name = dados.records.field_1;
  //     // @ts-ignore
  //     const name = dados.records.field_1;
  //     console.log(name);
  //   });
  // }

}
