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
    translate.addLangs(['pt', 'en']);
    translate.setDefaultLang('pt');
    translate.use('pt');
  }

  language = 'pt';

  ChangeLanguage() {
    if (this.language == this.translate.langs[0]) {
      this.language = this.translate.langs[1];
      this.translate.use('en');
    } else if (this.language == this.translate.langs[1]) {
      this.language = this.translate.langs[0];
      this.translate.use('pt');
    }
  }


  @HostListener('window:scroll', [])
  OnWindowScroll() {
    const number_width = window.screen.width;
    if (number_width <= 992) {
      document.getElementById('navbarNavDropdown').style.backgroundColor = '#E43D30';
      document.getElementById('lg').style.color = 'black';
    } else if (number_width > 992) {
      document.getElementById('navbarNavDropdown').style.backgroundColor = 'transparent';
      document.getElementById('lg').style.color = '#E43D30';
    }

    const number = window.pageYOffset;
    if (number > 100) {
      document.getElementById('nav').style.background = '#E43D30';
      document.getElementById('lg').style.color = '#000000';
    } else if (number < 100) {
      if (window.screen.width <= 995) {
        document.getElementById('nav').style.background = 'transparent';
        document.getElementById('lg').style.color = '#000000';
      } else {
        document.getElementById('nav').style.background = 'transparent';
        document.getElementById('lg').style.color = '#E43D30';
      }
    }
  }

  HeaderStyle() {
    if (!this.router.url.includes('/home')) {
      document.getElementById('nav').style.background = '#E43D30';
      document.getElementById('lg').style.color = '#000000';
    } else {
      this.OnWindowScroll();
    }
  }

}
