/**
 * Title: service-list.component.ts
 * Author: Professor Krasso
 * Date: 28 Feb 2021
 * Modified By:  Anil Rayamajhi
 * Description: App Component
 */

import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { IService } from '../service.interface';
import { ServiceListService } from './../service-list.service';

@Component({
  selector: 'app-service-list',
  templateUrl: './service-list.component.html',
  styleUrls: ['./service-list.component.scss'],
})
export class ServiceListComponent implements OnInit {
  services: Array<IService>;

  constructor(
    private serviceListService: ServiceListService,
    private dialog: MatDialog
  ) {
    this.services = serviceListService.getServices();
  }

  ngOnInit(): void {}

  selectService() {}
}
