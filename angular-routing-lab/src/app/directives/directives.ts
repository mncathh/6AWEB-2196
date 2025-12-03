import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-directives',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './directives.html',
  styleUrl: './directives.css',
})
export class Directives {
  isStaticNoteVisible: boolean = false;
  isNoteVisible: boolean = true;
  isParagraphVisible: boolean = true;

  showNote(){
    this.isNoteVisible = true;
  }
  hideNote(){
    this.isNoteVisible = false;
  }
  toggleNote(){
    this.isParagraphVisible = !this.isParagraphVisible;
  }

  monthNameStatic: string = 'Oct';
  monthNameDynamic: string = 'July';

  cityList: string[] = ["Angeles", "San Fernando", "Mexico", "Tarlac", "Bataan"];

  studentList: any[] = [
    {name:'C Laguda', course: 'Web Development', isActive:false},
    {name:'J Dizon', course: 'Network Administration', isActive:false},
    {name:'D Esquivel', course: 'System Development', isActive:false},
    {name:'A Antonio', course: 'CyberSecurity', isActive:false},
    {name:'T Trivino', course: 'Web Development', isActive:true},
  ];

}
