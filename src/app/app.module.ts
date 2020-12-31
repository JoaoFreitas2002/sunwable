import {BrowserModule} from '@angular/platform-browser';
import {LOCALE_ID, NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {HomeComponent} from './home/home.component';
import {SolarModulesComponent} from './solar-modules/solar-modules.component';
import {InvertersComponent} from './inverters/inverters.component';
import {BatteriesComponent} from './batteries/batteries.component';
import {StructuresComponent} from './structures/structures.component';

import {CountUpModule} from 'ngx-countup';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {ProductDetailComponent} from './product-detail/product-detail.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SolarModulesComponent,
    InvertersComponent,
    BatteriesComponent,
    StructuresComponent,
    ProductDetailComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    CountUpModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [{provide: LOCALE_ID, useValue: 'pt-PT'}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
