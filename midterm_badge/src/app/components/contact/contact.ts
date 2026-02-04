import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.html'
})
export class ContactComponent {
  userEmail: string = '';
  userMessage: string = '';

  submitForm() {
    alert('Form submitted successfully!');
  }
}
