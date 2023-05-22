import { Component, OnInit } from '@angular/core'
import { AuthService } from '../auth.service'
import { TStoreService } from '../t-store.service'
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
  form: any = {
    email: null,
    password1: null,
    password2: null,
    perms: 'normal'
  };
  
  isLoggedIn = false
  roles = []

  constructor(
    private authService: AuthService, 
    private tokenStorage: TStoreService,
    private router: Router
  ) { }
  
  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true
      this.roles = this.tokenStorage.getUser().roles
      this.router.navigate(['/dashboard'])
    } else {
      this.router.navigate(['/register'])
    }
  }

  onSubmit(): void {
    const { email, password1, password2, perms } = this.form
    if(password1 == password2) {
      
    }
    this.authService.register(email, password1, password2, perms).subscribe({
      next: data => {
        this.tokenStorage.saveToken(data.accessToken)
        this.tokenStorage.saveUser(data)
        this.isLoggedIn = true
        this.roles = this.tokenStorage.getUser().perms

        alert('User registered successfully')
        this.loadDashboard()
      },
      error: err => {
        console.log(err)
      }
    })
  }

  loadDashboard(): void {
    this.router.navigate(['/dashboard']).then(() => window.location.reload())
  }
}