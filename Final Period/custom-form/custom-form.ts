import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-custom-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './custom-form.html',
  styleUrl: './custom-form.css'
})
export class CustomForm {
  @ViewChild('jobForm') jobForm!: NgForm;

  // Form fields
  fullName = '';
  email = '';
  gender = '';
  status = '';
  comments = ''; // Added comments field
  submitted = false;

  onSubmit() {
    if (this.jobForm.valid) {
      this.submitted = true;
      console.log('Application Submitted:', {
        fullName: this.fullName,
        email: this.email,
        gender: this.gender,
        status: this.status,
        comments: this.comments
      });
    }
  }

  resetForm() {
    this.submitted = false;
    this.fullName = '';
    this.email = '';
    this.gender = '';
    this.status = '';
    this.comments = '';
    this.jobForm.reset();
  }
}
