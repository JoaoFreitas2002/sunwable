import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private router: Router) {
  }

  getHeaderStyle() {
    if ((this.router.url.includes('/solar_modules')) || (this.router.url.includes('/inverters')) ||
      (this.router.url.includes('/batteries')) || (this.router.url.includes('/structures')) ||
      (this.router.url.includes('/product_detail')) || (this.router.url.includes('/contact'))) {
      document.getElementById('nav').style.background = '#E43D30';
      document.getElementById('pt').style.color = '#000000';
    }
  }
}
