import { Component } from '@angular/core';
import { PersonalInfoComponent } from './personal-info/personal-info.component';

@Component({
  selector: 'app-side',
  standalone: true,
  imports: [PersonalInfoComponent],
  templateUrl: './side.component.html',
  styleUrl: './side.component.css'
})
export class SideComponent {

}
