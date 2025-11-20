import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-data-binding-demo',
  standalone: true,
  imports: [CommonModule, FormsModule],  // needed for *ngIf, *ngFor, ngModel
  templateUrl: './data-binding-demo.html',
  styleUrls: ['./data-binding-demo.css']
})
export class DataBindingDemo {
  message = "Data Binding Demonstration";
  title = "My First App!";
  description = "This is my new Angular Application";

  imageUrl = '/assets/angular-logo.png';
  w = 50;
  h = 50;
  altText = 'Angular Logo';

  messageColor = 'blue';
  isHighlighted = true;

  //yourName = '';

  // count = 0;
  // increment() {
  //   this.count++;
  // }
  // decrement() {
  //   this.count--;
  // }
}