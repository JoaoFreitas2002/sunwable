import {Component, OnInit} from '@angular/core';

import {WebsiteService} from "../services/website/website.service";
import {Shedule} from "../services/website/shedule";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private websiteSrv: WebsiteService) {
  }

  shedule: Shedule;

  EmailForm: {
    'name': string,
    'company': string,
    'phone': string,
    'place': string,
    'email': string,
    'message': string
  };

  ngOnInit(): void {
    this.GetAll();
    this.EmailForm = {
      name: '',
      company: '',
      phone: '',
      place: '',
      email: '',
      message: ''
    };
  }

  SendEmail() {
    this.websiteSrv.SendEmail(this.EmailForm).subscribe();
  }

  GetAll() {
    this.shedule = new Shedule();
    this.websiteSrv.GetShedule().subscribe(data => this.shedule = data[0]);
  }

}
