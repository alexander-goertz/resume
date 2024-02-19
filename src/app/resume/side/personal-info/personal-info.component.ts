import { Component, inject } from '@angular/core';
import { DatabaseService } from '../../../database.service';
import { PersonalInfo } from './personal-info';

@Component({
  selector: 'app-personal-info',
  standalone: true,
  imports: [],
  templateUrl: './personal-info.component.html',
  styleUrl: './personal-info.component.css',
})
export class PersonalInfoComponent {
  databaseService: DatabaseService = inject(DatabaseService);
  personalInfo?: PersonalInfo;

  constructor() {
    this.databaseService.getPersonalInfo().subscribe((data) => {
      this.personalInfo = data[0];
    });
  }
}
