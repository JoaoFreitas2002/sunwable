import {Component, HostListener} from '@angular/core';
import {Router} from '@angular/router';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private router: Router,
              private translate: TranslateService) {
    translate.setDefaultLang('pt');
  }

  @HostListener('window:scroll', [])
  OnWindowScroll() {
    const number_width = window.screen.width;
    if (number_width <= 992) {
      document.getElementById('navbarNav').style.backgroundColor = '#E43D30';
      document.getElementById('pt').style.color = 'black';
    } else if (number_width > 992) {
      document.getElementById('navbarNav').style.backgroundColor = 'transparent';
      document.getElementById('pt').style.color = '#E43D30';
    }

    // tslint:disable-next-line:variable-name
    const number = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (number > 100) {
      document.getElementById('nav').style.background = '#E43D30';
      document.getElementById('pt').style.color = '#000000';
    } else if (number < 100) {
      if (window.screen.width <= 995) {
        document.getElementById('nav').style.background = 'transparent';
        document.getElementById('pt').style.color = '#000000';
      } else {
        document.getElementById('nav').style.background = 'transparent';
        document.getElementById('pt').style.color = '#E43D30';
      }
    }
  }

  HeaderStyle() {
    if ((this.router.url.includes('/solar_modules')) || (this.router.url.includes('/inverters')) ||
      (this.router.url.includes('/batteries')) || (this.router.url.includes('/structures')) ||
      (this.router.url.includes('/product_detail')) || (this.router.url.includes('/contact')) ||
      (this.router.url.includes('/404'))) {
      document.getElementById('nav').style.background = '#E43D30';
      document.getElementById('pt').style.color = '#000000';
    } else {
      this.OnWindowScroll();
    }
  }

}
