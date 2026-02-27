import { Component } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators, FormsModule } from '@angular/forms';

// Module Imports
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSliderModule } from '@angular/material/slider';

// EXTRA 3 COMPONENTS
import { MatToolbarModule } from '@angular/material/toolbar'; // 1. Toolbar
import { MatCardModule } from '@angular/material/card';       // 2. Card
import { MatIconModule } from '@angular/material/icon';       // 3. Icons

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    CommonModule, ReactiveFormsModule, FormsModule, MatButtonModule, 
    MatCheckboxModule, MatNativeDateModule, MatDatepickerModule, 
    MatFormFieldModule, MatInputModule, MatRadioModule, MatSliderModule,
    MatToolbarModule, MatCardModule, MatIconModule
  ],
  templateUrl: './register.html',
  styleUrl: './register.css',
  providers: [DatePipe]
})
export class Register{
  // Data properties from module
  userName: string = '';
  email: string = '';
  password: string = '';
  gender: string = '';
  birthDate!: Date;
  address: string = '';
  angularSkillLevel: number = 5;
  submitted = false;
  minSkillLevel = 1;
  maxSkillLevel = 10;

  // Form Group with Validators from module
  formdata = new FormGroup({
    userName: new FormControl(''),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    gender: new FormControl('', [Validators.required]),
    birthDate: new FormControl(null, [Validators.required]),
    address: new FormControl(''),
    angularSkillLevel: new FormControl(5)
  });

  onClickSubmit(data: any) {
    this.submitted = true;
    this.userName = data.userName;
    this.email = data.email;
    this.password = data.password;
    this.gender = data.gender;
    this.address = data.address;
    this.birthDate = data.birthDate;
    this.angularSkillLevel = data.angularSkillLevel;

    if (this.formdata.valid) {
      console.log("Form Submitted!", this.formdata.value);
    } else {
      console.log("Form is not valid!");
    }
  }
}