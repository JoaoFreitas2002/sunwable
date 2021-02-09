import {Component, OnInit, HostListener} from '@angular/core';


@Component({
  selector: 'app-error404',
  templateUrl: './error404.component.html',
  styleUrls: ['./error404.component.css']
})
export class Error404Component implements OnInit {

  constructor() {
  }

  innerHeight: any;
  height: string;

  ngOnInit(): void {
    this.WindowHeigh();
  }

  @HostListener('window:resize', [])
  WindowHeigh() {
    this.innerHeight = window.innerHeight;
    this.height = this.innerHeight - 470 + 'px';
    document.getElementById('container').style.maxHeight = '300px';
    document.getElementById('container').style.minHeight = '50px';
    document.getElementById('container').style.height = String(this.height);
  }

}
