import { Component, inject } from '@angular/core';
import { JobPositionComponent } from './job-position/job-position.component';
import { DatabaseService } from '../../database.service';
import { JobPosition } from './job-position/job-position';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-work-experience',
  standalone: true,
  imports: [JobPositionComponent, NgFor],
  templateUrl: './work-experience.component.html',
  styleUrl: './work-experience.component.css'
})

export class WorkExperienceComponent {
  databaseService: DatabaseService = inject(DatabaseService);
  jobPositions?: JobPosition[];

  constructor() {
    // calle die funktion aus dem databaseService, die einen request ans backend macht
    this.databaseService.getWorkExperience().subscribe(data => {
      // kopiere die daten aus der response in den jobPositions Array
      this.jobPositions = data.reverse();
    })
  }
}
