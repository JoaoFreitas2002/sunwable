import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

import {Apresentation} from "./apresentation";
import {Shedule} from "./shedule";
import {Characteristic} from "./characteristic";
import {Carousel} from "./carousel";
import {OurNumbers} from "./ourNumbers";

@Injectable({
  providedIn: 'root'
})
export class WebsiteService {

  apresentationUrl = 'https://joaofreitas2002.pythonanywhere.com/pt/website/apresentation/';
  characteristicUrl = 'https://joaofreitas2002.pythonanywhere.com/pt/website/characteristic/';
  ourNumbersUrl = 'https://joaofreitas2002.pythonanywhere.com/pt/website/ourNumbers/';
  carouselUrl = 'https://joaofreitas2002.pythonanywhere.com/pt/website/carousel/';
  sheduleUrl = 'https://joaofreitas2002.pythonanywhere.com/pt/website/shedule/';
  emailUrl = 'http://127.0.0.1:8000/pt/website/mail/';

  constructor(private http: HttpClient) {
  }

  GetApresentation() {
    return this.http.get<Apresentation>(this.apresentationUrl);
  }

  GetCharacteristic() {
    return this.http.get<Characteristic>(this.characteristicUrl);
  }

  GetOurNumbers() {
    return this.http.get<OurNumbers>(this.ourNumbersUrl);
  }

  GetAllCarousel() {
    return this.http.get<Carousel[]>(this.carouselUrl);
  }

  GetShedule() {
    return this.http.get<Shedule>(this.sheduleUrl);
  }

  SendEmail(emailform) {
    return this.http.post(this.emailUrl, emailform);
  }

}
