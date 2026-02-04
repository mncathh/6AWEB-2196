import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, shareReplay } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ApiService {
  private url = 'https://jsonplaceholder.typicode.com/posts';
  public posts$: Observable<any[]>;

  constructor(private http: HttpClient) {
    this.posts$ = this.http.get<any[]>(this.url).pipe(
      shareReplay(1) // Requirement: Basic caching
    );
  }
}
