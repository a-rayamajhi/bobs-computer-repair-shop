/**
 * Title: app-routing.module.ts
 * Author: Professor Krasso
 * Date: 5 Feb 2021
 * Modified By:  Anil Rayamajhi
 * Description: Routing Module
 */

import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { ServiceListComponent } from './service-list/service-list.component';

/**
 * Declare Routes here
 */
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'service-list', component: ServiceListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
