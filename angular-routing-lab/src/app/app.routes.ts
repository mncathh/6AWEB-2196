import { Routes } from '@angular/router';
import { Home } from './home/home';
import { DataBinding } from './data-binding/data-binding';
import { Directives } from './directives/directives';
import { Bootstrap } from './bootstrap/bootstrap';
import { Tailwind } from './tailwind/tailwind';
import { PageNotFound } from './page-not-found/page-not-found';

export const routes: Routes = [
  {path:'', component: Home},
  {path:'data-binding', component: DataBinding},
  {path:'directives', component: Directives},
  {path:'bootstrap', component: Bootstrap},
  {path:'tailwind', component: Tailwind},
  {path:'**', component: PageNotFound}  // This catches all unmatched routes
];
