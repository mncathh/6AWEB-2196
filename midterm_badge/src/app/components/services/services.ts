import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../api.service';
import { TruncatePipe } from '../../pipes/truncate-pipe'; // Corrected filename
import { Observable } from 'rxjs';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, FormsModule, TruncatePipe],
  templateUrl: './services.html' // Corrected filename
})
export class ServicesComponent implements OnInit {
  posts$!: Observable<any[]>;
  searchTerm: string = '';

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    // This fix solves the "used before initialization" error
    this.posts$ = this.apiService.posts$;
  }
}
