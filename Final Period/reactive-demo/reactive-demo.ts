import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-reactive-demo',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './reactive-demo.html',
  styleUrls: ['./reactive-demo.css']
})
export class ReactiveDemo implements OnInit {
  // Form Group
  registrationForm!: FormGroup;
  submitted = false;
  showPassword = false;
  showSuccessPage = false;

  // Password strength properties
  passwordStrength: 'weak' | 'medium' | 'strong' = 'weak';
  passwordStrengthPercent = 0;
  passwordStrengthText = 'Weak password';

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initializeForm();

    // Listen to password changes for strength indicator
    this.registrationForm.get('password')?.valueChanges.subscribe(value => {
      this.updatePasswordStrength(value);
    });
  }

  initializeForm(): void {
    this.registrationForm = this.fb.group({
      // Personal Information
      fullName: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.pattern('^[0-9+\\-\\s]+$')]],
      dateOfBirth: [''],

      // Security with enhanced password validation
      password: ['', [
        Validators.required,
        Validators.minLength(8),
        Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')
      ]],
      confirmPassword: ['', Validators.required],

      // Additional Information
      gender: ['', Validators.required],
      employmentStatus: ['', Validators.required], // Now dropdown
      comments: [''],
      newsletter: [false]
    }, { validators: this.passwordMatchValidator });
  }

  // Custom validator to check if passwords match
  passwordMatchValidator(group: FormGroup): { [key: string]: boolean } | null {
    const password = group.get('password')?.value;
    const confirmPassword = group.get('confirmPassword')?.value;

    if (password && confirmPassword && password !== confirmPassword) {
      return { passwordMismatch: true };
    }
    return null;
  }

  // Update password strength based on value
  updatePasswordStrength(password: string): void {
    if (!password) {
      this.passwordStrength = 'weak';
      this.passwordStrengthPercent = 0;
      this.passwordStrengthText = 'Weak password';
      return;
    }

    let strength = 0;

    // Length check
    if (password.length >= 8) strength += 25;
    if (password.length >= 10) strength += 10;

    // Uppercase check
    if (/[A-Z]/.test(password)) strength += 25;

    // Lowercase check
    if (/[a-z]/.test(password)) strength += 15;

    // Number check
    if (/[0-9]/.test(password)) strength += 15;

    // Special character check (bonus)
    if (/[^A-Za-z0-9]/.test(password)) strength += 10;

    // Cap at 100
    this.passwordStrengthPercent = Math.min(strength, 100);

    // Determine strength level
    if (this.passwordStrengthPercent >= 80) {
      this.passwordStrength = 'strong';
      this.passwordStrengthText = 'Strong password';
    } else if (this.passwordStrengthPercent >= 50) {
      this.passwordStrength = 'medium';
      this.passwordStrengthText = 'Medium password';
    } else {
      this.passwordStrength = 'weak';
      this.passwordStrengthText = 'Weak password';
    }
  }

  // Convenience getters for form controls
  get fullName() {
    return this.registrationForm.get('fullName');
  }

  get email() {
    return this.registrationForm.get('email');
  }

  get password() {
    return this.registrationForm.get('password');
  }

  get confirmPassword() {
    return this.registrationForm.get('confirmPassword');
  }

  get phone() {
    return this.registrationForm.get('phone');
  }

  get gender() {
    return this.registrationForm.get('gender');
  }

  get employmentStatus() {
    return this.registrationForm.get('employmentStatus');
  }

  get passwordMismatch(): boolean {
    const mismatch = this.registrationForm.hasError('passwordMismatch');
    return mismatch === true;
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.registrationForm.valid) {
      this.showSuccessPage = true;
      console.log('Form Submitted:', this.registrationForm.value);
    } else {
      this.markFormGroupTouched(this.registrationForm);
    }
  }

  // Mark all controls as touched to show validation errors
  markFormGroupTouched(formGroup: FormGroup) {
    Object.values(formGroup.controls).forEach(control => {
      control.markAsTouched();
      if (control instanceof FormGroup) {
        this.markFormGroupTouched(control);
      }
    });
  }

  resetForm(): void {
    this.submitted = false;
    this.registrationForm.reset({
      fullName: '',
      email: '',
      password: '',
      confirmPassword: '',
      phone: '',
      dateOfBirth: '',
      gender: '',
      employmentStatus: '',
      comments: '',
      newsletter: false
    });
    this.passwordStrength = 'weak';
    this.passwordStrengthPercent = 0;
    this.passwordStrengthText = 'Weak password';
  }

  closeSuccessPage(): void {
    this.showSuccessPage = false;
  }
}
