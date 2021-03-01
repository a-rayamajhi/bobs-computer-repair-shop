/**
 * Title: app.component.ts
 * Author: Professor Krasso
 * Date: 1 Mar 2021
 * Modified By:  Anil Rayamajhi
 * Description: App Component
 *  load service list from Service List Angular Service for footer
 */

import { Component } from '@angular/core';
import { IService } from './service.interface';
import { ServiceListService } from './service-list.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  appName: string;
  services: Array<IService>;

  constructor(private serviceListService: ServiceListService) {
    this.appName = "BOB's Computers";
    this.services = serviceListService.getServices();
  }
}
