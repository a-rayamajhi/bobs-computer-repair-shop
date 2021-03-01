/**
 * Title: service-list.component.ts
 * Author: Professor Krasso
 * Date: 28 Feb 2021
 * Modified By:  Anil Rayamajhi
 * Description: Invoice Dialog
 *  This is popover that show up on calculate.
 *  This will should calculated invoice with price break down
 *  per service and additional service requested.
 */

import { Component, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Inject } from '@angular/core';
import { IService } from './../service.interface';

@Component({
  selector: 'app-invoice-dialog',
  templateUrl: './invoice-dialog.component.html',
  styleUrls: ['./invoice-dialog.component.scss'],
})
export class InvoiceDialogComponent implements OnInit {
  services: Array<IService>;
  part: number;
  hour: number;
  total: number;
  customServiceTotal: number;

  /**
   *
   * @param dialogRef MatDialogRef
   * @param data any
   *
   * Description: Load InvoiceDialogComponent to dialog
   */
  constructor(
    private dialogRef: MatDialogRef<InvoiceDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data: any
  ) {
    // make payload available for the invoice dialog component
    const { services, part, hour, total, customServiceTotal } = data;
    this.services = services;
    this.part = parseFloat(part);
    this.hour = parseFloat(hour);
    this.total = parseFloat(total);
    this.customServiceTotal = parseFloat(customServiceTotal);
  }

  ngOnInit(): void {}
}
