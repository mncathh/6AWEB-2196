import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class EmployeeService {
  getEmployees() {
    return [
      { id: 101, firstname: 'Catherine', lastname: 'Laguda', email: 'cglaguda@hau.edu.ph' },
      { id: 102, firstname: 'Princess', lastname: 'Lacanlale', email: 'clacanlale@hau.edu.ph' },
      { id: 103, firstname: 'Claire', lastname: 'Mangacu', email: 'cmangacu@hau.edu.ph' },
      { id: 104, firstname: 'Robert', lastname: 'Quintana', email: 'rquintana@hau.edu.ph' },
      { id: 105, firstname: 'YourFirstName', lastname: 'YourLastName', email: 'yourEmail@hau.edu.ph' }
    ];
  }
}
