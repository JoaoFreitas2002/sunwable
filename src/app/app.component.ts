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

  closeButton = false;

  AddClassToCollapse() {
    document.getElementById('navbarNav').className = 'collapse navbar-collapse collapseClass';
    this.closeButton = true;
    document.getElementById('navbar-nav').className = 'navbar-nav collapseUlClass';
    document.getElementById('navbarDropdownMenuLink').style.textAlign = 'right';
    document.getElementById('navbarDropdownMenuLink2').style.textAlign = 'right';
    document.getElementById('img1').className = 'img1 img1ext';
    document.getElementById('img11').className = 'img1 img1ext';
    document.getElementById('dropdown1').className = 'dropdown-menu collapseUlClass2';
    document.getElementById('dropdown2').className = 'dropdown-menu collapseUlClass2';
    document.getElementById('firstdrop').className = 'nav-item dropdown collapseLiClass';
    document.getElementById('seconddrop').className = 'nav-item dropdown collapseLiClass';
  }

  RemoveClassToCollapse() {
    document.getElementById('navbarNav').className = 'collapse navbar-collapse';
    this.closeButton = false;
    document.getElementById('navbar-nav').className = 'navbar-nav';
    document.getElementById('navbarDropdownMenuLink').style.textAlign = 'none';
    document.getElementById('navbarDropdownMenuLink2').style.textAlign = 'none';
    document.getElementById('img1').className = 'img1';
    document.getElementById('img11').className = 'img1';
    document.getElementById('dropdown1').className = 'dropdown-menu';
    document.getElementById('dropdown2').className = 'dropdown-menu';
    document.getElementById('firstdrop').className = 'nav-item dropdown';
    document.getElementById('seconddrop').className = 'nav-item dropdown';

  }

  @HostListener('window:scroll', [])
  OnWindowScroll() {
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

  GetHeaderStyle() {
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
