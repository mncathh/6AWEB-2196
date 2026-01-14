import { DatePipe, UpperCasePipe, LowerCasePipe, CurrencyPipe, DecimalPipe, PercentPipe, SlicePipe, AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { Observable, interval } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-pipes-demo',
  imports: [DatePipe, UpperCasePipe, LowerCasePipe, CurrencyPipe, DecimalPipe, PercentPipe, SlicePipe, AsyncPipe],
  templateUrl: './pipes-demo.html',
  styleUrl: './pipes-demo.css',
})
export class PipesDemo {
  presentDate = new Date();  // For Date pipes
  time$ = interval(1000).pipe(map(() => new Date()));  // Observable for Async pipe
  price = 1234.56;  // For Currency pipe
  numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];  // Array for Slice pipe
  decimalValue = 3.14159;  // For Decimal pipe
  percentage = 0.85;  // For Percent pipe
  text = 'Hello World';  // For UpperCase and LowerCase pipes
}
