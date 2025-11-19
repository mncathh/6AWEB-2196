import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Header } from "./header/header";
import { Skills } from "./skills/skills";
import { Education } from "./education/education";
import { Certification } from "./certification/certification";
import { Footer } from "./footer/footer";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    Header,
    Skills,
    Education,
    Certification,
    Footer
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('my-first-app');
}
