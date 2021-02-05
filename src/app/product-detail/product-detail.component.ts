import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  constructor() {}

  product: {
    field1: any,
    field2: any,
    field3: any,
    field4: any,
    field5: any,
    field6: any,
    field7: any,
    field8: any,
    field9: any,
    field10: any,
  };
  products: [{
    field1: any;
    field2: any,
    field3: any,
    field4: any,
    field5: any,
    field6: any,
    field7: any,
    field8: any,
    field9: any,
    field10: any,
  }];

  ngOnInit(): void {
    console.log(this.product);
    console.log(this.products);
    this.product = history.state.data.data1;
    this.products = history.state.data.data2;
    console.log(this.product);
    console.log(this.products);
  }

}
