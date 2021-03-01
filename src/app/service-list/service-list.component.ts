/**
 * Title: service-list.component.ts
 * Author: Professor Krasso
 * Date: 28 Feb 2021
 * Modified By:  Anil Rayamajhi
 * Description: App Component
 */

import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { InvoiceDialogComponent } from '../invoice-dialog/invoice-dialog.component';
import { IService } from '../service.interface';
import { ServiceListService } from './../service-list.service';

@Component({
  selector: 'app-service-list',
  templateUrl: './service-list.component.html',
  styleUrls: ['./service-list.component.scss'],
})
export class ServiceListComponent implements OnInit {
  // services of Array type IService
  services: Array<IService>;
  // bind with part model input field
  part: number;
  // bind with hour model input field
  hour: number;
  // total property to store the accumulated value
  total: number = 0;
  // store value for per hour price
  customServiceTotal: number = 0;

  /**
   *
   * @param serviceListService ServiceListService
   * @param dialog MatDialog
   *
   * Initiate services property with services list from Service List Angular Service
   */
  constructor(
    private serviceListService: ServiceListService,
    private dialog: MatDialog
  ) {
    this.services = serviceListService.getServices();
  }

  ngOnInit(): void {}

  /**
   * Include Calculation logic and if the sum exist invoke Invoice Modal
   */
  calculateResults() {
    const { part, hour } = this;
    let total = 0;

    if (!!hour) {
      total = this.customServiceTotal = hour * 50;
    }

    if (!!part) {
      total = +part + total;
    }

    this.services.forEach((el) => {
      if (el.checked) {
        total = total + el.price;
      }
    });

    if (!!total) {
      this.total = total;
      this.showInvoices();
    }
  }

  /**
   * Reset Entire input
   */
  reset() {
    this.part = null;
    this.hour = null;
    this.resetCalculatedValues();

    this.services = this.serviceListService.reset();
  }

  /**
   * reset total on cancel
   */
  resetCalculatedValues() {
    this.total = this.customServiceTotal = 0;
  }

  /**
   *
   * Description: load invoices in InvoiceDialogComponent Modal
   */
  showInvoices() {
    const { services, part, hour, total, customServiceTotal } = this;

    // lauch modal with service-list properties
    const dialogRef = this.dialog.open(InvoiceDialogComponent, {
      data: {
        services: services.filter((el) => el.checked),
        part,
        hour,
        total,
        customServiceTotal,
      },
      disableClose: true,
      width: '800px',
    });

    // Subscribe to dialog state
    dialogRef.afterClosed().subscribe((result) => {
      if (result === 'confirm') {
        this.reset();
      }
      if (result === 'cancel') {
        this.resetCalculatedValues();
      }
    });
  }
}
