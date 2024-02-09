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
  // erwarte input von parent component zum befüllen des templates mit daten
  @Input() jobPosition!: JobPosition;
}
