import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeService } from './employee';
import { ProductService } from './product';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent implements OnInit {
  employees: any[] = [];
  products: any[] = [];

  constructor(
    private _employeeService: EmployeeService,
    private _productService: ProductService
  ) {}

  ngOnInit() {
    this.employees = this._employeeService.getEmployees();
    this.products = this._productService.getProducts();
  }
}
