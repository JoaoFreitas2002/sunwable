import {Component, HostListener} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private router: Router) {
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    // tslint:disable-next-line:variable-name
    const number = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (number > 100) {
      document.getElementById('nav').style.background = '#E43D30';
      document.getElementById('pt').style.color = '#000000';
    } else if (number < 100) {
      document.getElementById('nav').style.background = 'transparent';
      document.getElementById('pt').style.color = '#E43D30';
    }
  }

  getHeaderStyle() {
    if ((this.router.url.includes('/solar_modules')) || (this.router.url.includes('/inverters')) ||
      (this.router.url.includes('/batteries')) || (this.router.url.includes('/structures')) ||
      (this.router.url.includes('/product_detail')) || (this.router.url.includes('/contact')) ||
      (this.router.url.includes('/404'))) {
      document.getElementById('nav').style.background = '#E43D30';
      document.getElementById('pt').style.color = '#000000';
    } else {
      this.onWindowScroll();
    }
  }

}
