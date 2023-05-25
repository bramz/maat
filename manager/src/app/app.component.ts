import { Component } from '@angular/core'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faSignature, faPen, faLaptopCode, faGear } from '@fortawesome/free-solid-svg-icons'
import { TStoreService } from './t-store.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  faSignature = faSignature
  faPen = faPen
  faLaptopCode = faLaptopCode
  faGithub = faGithub
  faGear = faGear
  isLoggedIn = false
  isActive = false
  
  private roles: string[] = []


  constructor(
    private tokenStorageService: TStoreService,
    private router: Router
    ) { }

  logout(): void {
    this.tokenStorageService.signOut()
    this.isLoggedIn = false
    this.router.navigate(['/'])
  }

  userEmail!: string
  email!: string
  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken()
    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser()
      this.userEmail = user.email.split('@')[0]
      this.email = this.userEmail.charAt(0).toUpperCase() + this.userEmail.slice(1)
      this.roles = user.roles
    } else {
      this.router.navigate(['/login'])
    }
  }
}