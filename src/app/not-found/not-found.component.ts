/**
 * Title: not-found.component.ts
 * Author: Professor Krasso
 * Date: 1 Mar 2021
 * Modified By:  Anil Rayamajhi
 * Description: Not found component will load
 * for non configured routes with 404 status
 */

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss'],
})
export class NotFoundComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
