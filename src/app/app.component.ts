/**
 * Title: app.component.ts
 * Author: Professor Krasso
 * Date: 28 Feb 2021
 * Modified By:  Anil Rayamajhi
 * Description: App Component
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
  assignment: string;
  services: Array<IService>;

  constructor(private serviceListService: ServiceListService) {
    this.assignment = "BOB's Computers";
    this.services = serviceListService.getServices();
  }
}
