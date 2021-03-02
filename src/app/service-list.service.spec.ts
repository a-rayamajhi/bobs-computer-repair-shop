/**
 * Title: service-list.component.spec.ts
 * Author: Professor Krasso
 * Date: 1 Mar 2021
 * Modified By:  Anil Rayamajhi
 * Description: Test App content and properties
 */

import { TestBed } from '@angular/core/testing';

import { ServiceListService } from './service-list.service';

describe('ServiceListService', () => {
  let service: ServiceListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it(`should have as array of services`, () => {
    expect(service.services).toBeTruthy();
  });
});
