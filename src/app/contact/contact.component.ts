import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

import {WebsiteService} from "../services/website/website.service";
import {Shedule} from "../services/website/shedule";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private http: HttpClient,
              private websiteSrv: WebsiteService) {
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
    this.http.post('http://127.0.0.1:8000/website/mail/', this.EmailForm).subscribe(data => console.log(data));
  }

  GetAll() {
    this.shedule = new Shedule();
    this.websiteSrv.GetShedule().subscribe(data => this.shedule = data[0]);
  }

}
