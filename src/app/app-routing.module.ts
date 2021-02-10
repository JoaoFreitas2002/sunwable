import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {SolarModulesComponent} from './solar-modules/solar-modules.component';
import {InvertersComponent} from './inverters/inverters.component';
import {BatteriesComponent} from './batteries/batteries.component';
import {StructuresComponent} from './structures/structures.component';
import {ProductDetailComponent} from './product-detail/product-detail.component';
import {ContactComponent} from './contact/contact.component';
import {HomeComponent} from './home/home.component';
import {Error404Component} from "./error404/error404.component";

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'solar_modules', component: SolarModulesComponent},
  {path: 'inverters', component: InvertersComponent},
  {path: 'batteries', component: BatteriesComponent},
  {path: 'structures', component: StructuresComponent},
  {path: 'product_detail', component: ProductDetailComponent},
  {path: 'contact', component: ContactComponent},
  {path: '404', component: Error404Component},
  {path: '**', redirectTo: '/404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'top'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
