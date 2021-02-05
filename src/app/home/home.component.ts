import {Component, OnInit, HostListener, Inject} from '@angular/core';
import {DOCUMENT} from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  options = {
    duration: 2,
    useEasing: false
  };

  options2 = {
    duration: 2.5,
    useEasing: false
  };

  countUp: boolean;

  constructor(@Inject(DOCUMENT) private document) {
  }


  ngOnInit(): void {
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    // tslint:disable-next-line:variable-name
    const number = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

    if (number > 2000 && number < 2670) {
      this.countUp = true;
    } else {
      this.countUp = false;
    }

  }
}
