import {Component, OnInit, HostListener, Inject} from '@angular/core';
import {DOCUMENT} from '@angular/common';

import {WebsiteService} from "../services/website/website.service";
import {Apresentation} from "../services/website/apresentation";
import {Characteristic} from "../services/website/characteristic";
import {Carousel} from "../services/website/carousel";
import {OurNumbers} from "../services/website/ourNumbers";

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
  sd: any;

  constructor(@Inject(DOCUMENT) private document,
              private websiteSrv: WebsiteService) {
  }

  apresentation: Apresentation;
  characteristic: Characteristic;
  ourNumbers: OurNumbers;
  carousel: Carousel[] = [];

  ngOnInit() {
    this.GetAll();
  }

  GetAll() {
    this.apresentation = new Apresentation();
    this.characteristic = new Characteristic();
    this.ourNumbers = new OurNumbers();
    this.websiteSrv.GetApresentation().subscribe(data => this.apresentation = data[0]);
    this.websiteSrv.GetCharacteristic().subscribe(data => this.characteristic = data[0]);
    this.websiteSrv.GetAllCarousel().subscribe(data => this.carousel = data);
    this.websiteSrv.GetOurNumbers().subscribe(data => this.ourNumbers = data[0]);
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const height = window.pageYOffset;
    const width = window.screen.width;
    if (width >= 768 && width <= 1024) {
      if (height > 922) {
        this.countUp = true;
      } else {
        this.countUp = false;
      }
    } else if (width >= 1372) {
      if (height >= 1364 && height <= 2641) {
        this.countUp = true;
      } else {
        this.countUp = false;
      }
    } else if (width > 1024 && width < 1372) {
      if (height >= 1950 && height <= 2552) {
        this.countUp = true;
      } else {
        this.countUp = false;
      }
    }
  }
}
