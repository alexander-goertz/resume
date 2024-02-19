import { Component } from '@angular/core';
import { ProfileComponent } from './profile/profile.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [ProfileComponent, WorkExperienceComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
})
export class MainComponent {}
