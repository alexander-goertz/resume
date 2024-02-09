import { Component } from '@angular/core';
import { ImageComponent } from './image/image.component';
import { NameComponent } from './name/name.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ImageComponent, NameComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
