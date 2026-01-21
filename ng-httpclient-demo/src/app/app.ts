import { Component, signal, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { HttpclientService } from './httpclient';
import { User } from './user.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HttpClientModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent implements OnInit {
  protected readonly title = signal('http-client-demo');
  httpusers: User[] = [];

  constructor(private httpclient: HttpclientService) {}

  ngOnInit() {
    this.httpclient.getUsersRemotely().subscribe((data) => {
      // REQUIRED 2 (CHALLENGE): Limit the list to 5 users
      this.httpusers = data.slice(0, 5);
    });
  }
}