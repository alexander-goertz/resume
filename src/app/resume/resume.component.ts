import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { SideComponent } from './side/side.component';

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [HeaderComponent, MainComponent, SideComponent],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.css',
})
export class ResumeComponent {}
