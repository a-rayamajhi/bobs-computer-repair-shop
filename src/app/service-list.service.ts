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
      },
      {
        name: 'Spyware Removal',
        price: 99.99,
      },
      {
        name: 'RAM Upgrade',
        price: 129.99,
      },
      {
        name: 'Software Installation',
        price: 49.99,
      },
      {
        name: 'Tune-up',
        price: 89.99,
      },
      {
        name: 'Keyboard Cleaning',
        price: 45.0,
      },
      {
        name: 'Disk Clean-up',
        price: 149.99,
      },
    ];
  }

  getServices() {
    return this.services;
  }
}
