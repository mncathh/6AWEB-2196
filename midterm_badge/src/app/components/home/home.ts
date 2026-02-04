import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../api.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.html'
})
export class HomeComponent implements OnInit {
  posts$!: Observable<any[]>;

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.posts$ = this.apiService.posts$;
  }
}
