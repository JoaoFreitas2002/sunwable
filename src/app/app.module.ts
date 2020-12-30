import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {HomeComponent} from './home/home.component';
import {SolarModulesComponent} from './solar-modules/solar-modules.component';
import {InvertersComponent} from './inverters/inverters.component';
import {BatteriesComponent} from './batteries/batteries.component';
import {StructuresComponent} from './structures/structures.component';

import { CountUpModule } from 'ngx-countup';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SolarModulesComponent,
    InvertersComponent,
    BatteriesComponent,
    StructuresComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    CountUpModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
