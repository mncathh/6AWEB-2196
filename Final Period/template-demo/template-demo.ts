import { Component, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-template-demo',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './template-demo.html',
  styleUrls: ['./template-demo.css']
})
export class TemplateDemo {
  @ViewChild('regForm') regForm!: NgForm;  // Add this line to access the form

  // Form fields
  fullName = '';
  email = '';
  password = '';
  confirmPassword = '';
  phone = '';
  dateOfBirth = '';

  // Required additional fields
  gender = '';              // Radio buttons
  employmentStatus = '';     // Permanent/Probationary
  comments = '';             // Notes

  newsletter = false;

  submitted = false;
  showPassword = false;
  showSuccessPage = false;

  onSubmit(): void {
    // Check form validity using the form reference
    if (this.regForm?.valid && this.passwordsMatch()) {
      this.submitted = true;
      this.showSuccessPage = true;
      console.log('Form Submitted:', {
        fullName: this.fullName,
        email: this.email,
        phone: this.phone,
        dateOfBirth: this.dateOfBirth,
        gender: this.gender,
        employmentStatus: this.employmentStatus,
        comments: this.comments,
        newsletter: this.newsletter
      });
    }
  }

  passwordsMatch(): boolean {
    return this.password === this.confirmPassword;
  }

  resetForm(): void {
    this.submitted = false;
    this.fullName = '';
    this.email = '';
    this.password = '';
    this.confirmPassword = '';
    this.phone = '';
    this.dateOfBirth = '';
    this.gender = '';
    this.employmentStatus = '';
    this.comments = '';
    this.newsletter = false;
    this.regForm?.reset(); // Reset the form state
  }

  closeSuccessPage(): void {
    this.showSuccessPage = false;
  }
}
