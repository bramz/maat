import { Component } from '@angular/core';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faSignature, faPen, faLaptopCode } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  faSignature = faSignature;
  faPen = faPen;
  faLaptopCode = faLaptopCode;
  faGithub = faGithub;
  title = 'manager';
}
