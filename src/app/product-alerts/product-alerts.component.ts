import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import {Output, EventEmitter} from '@angular/core';

// The @Component decorator indicates that the class is a component. This gives our app meta data that tells the app this is the component, here is the template html and any style we want to apply.
@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
export class ProductAlertsComponent implements OnInit {
  // We are defining a property named product with the @Input decorator. What we are saying here is we use use the@Input() decorator to tell us we are going to pass in the products list from the products-list component.

  @Input() product;
  @Output() notify = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

}