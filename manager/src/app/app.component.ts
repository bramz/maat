import { Component } from '@angular/core';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faSignature, faPen, faLaptopCode } from '@fortawesome/free-solid-svg-icons';
import { TStoreService } from './t-store.service';

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
  
  private roles: string[] = [];
  isLoggedIn = false;

  constructor(private tokenStorageService: TStoreService) { }
  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();
    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
    }
  }
  logout(): void {
    this.tokenStorageService.signOut();
    window.location.reload();
  }
}
