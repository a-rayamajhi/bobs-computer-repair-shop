/**
 * Title: service-list.service.ts
 * Author: Professor Krasso
 * Date: 28 Feb 2021
 * Modified By:  Anil Rayamajhi
 * Description: Bob's Computers Service List Service
 */

import { Injectable } from '@angular/core';
import { IService } from './service.interface';

@Injectable({
  providedIn: 'root',
})
export class ServiceListService {
  services: Array<IService>;

  constructor() {
    this.services = [
      {
        name: 'Password Reset',
        price: 39.99,
        checked: false,
      },
      {
        name: 'Spyware Removal',
        price: 99.99,
        checked: false,
      },
      {
        name: 'RAM Upgrade',
        price: 129.99,
        checked: false,
      },
      {
        name: 'Software Installation',
        price: 49.99,
        checked: false,
      },
      {
        name: 'Tune-up',
        price: 89.99,
        checked: false,
      },
      {
        name: 'Keyboard Cleaning',
        price: 45.0,
        checked: false,
      },
      {
        name: 'Disk Clean-up',
        price: 149.99,
        checked: false,
      },
    ];
  }

  getServices() {
    return this.services;
  }
}
