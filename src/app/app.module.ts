import {BrowserModule} from '@angular/platform-browser';
import {LOCALE_ID, NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {SolarModulesComponent} from './solar-modules/solar-modules.component';
import {InvertersComponent} from './inverters/inverters.component';
import {BatteriesComponent} from './batteries/batteries.component';
import {StructuresComponent} from './structures/structures.component';

import {CountUpModule} from 'ngx-countup';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {ProductDetailComponent} from './product-detail/product-detail.component';
import { ContactComponent } from './contact/contact.component';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

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
    CountUpModule,
    HttpClientModule,
    FormsModule,
    TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
        })
  ],
  providers: [{provide: LOCALE_ID, useValue: 'pt-PT'}],
  bootstrap: [AppComponent]
})
export class AppModule {
}

// required for AOT compilation
export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http);
}
