import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { SolarModulesComponent } from './solar-modules/solar-modules.component';
import { InvertersComponent } from './inverters/inverters.component';
import { BatteriesComponent } from './batteries/batteries.component';
import { StructuresComponent } from './structures/structures.component';

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
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
