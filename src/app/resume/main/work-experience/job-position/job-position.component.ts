import { Component, Input } from '@angular/core';
import { JobPosition } from './job-position';
import { NgFor } from '@angular/common';


@Component({
  selector: 'app-job-position',
  standalone: true,
  imports: [NgFor],
  templateUrl: './job-position.component.html',
  styleUrl: './job-position.component.css'
})
export class JobPositionComponent {
  // Expect Input from Parent Component to then use in job-position.component.html
  @Input() jobPosition!: JobPosition;
}
