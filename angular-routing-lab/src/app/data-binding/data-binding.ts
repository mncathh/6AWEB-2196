import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-data-binding',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './data-binding.html',
  styleUrls: ['./data-binding.css']
})
export class DataBinding {
  message: string = 'Welcome to Angular Data Binding!';
  clickCount: number = 0;
  isDisabled: boolean = false;
  textColor: string = 'blue';
  fontSize: number = 16;
  isActive: boolean = false;
  hasError: boolean = false;
  yourName: string = '';
  imageUrl = "https://picsum.photos/200";

  handleClick(): void {
    this.clickCount++;
  }
}
