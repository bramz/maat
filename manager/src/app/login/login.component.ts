import { Component, OnInit } from '@angular/core'
import { AuthService } from '../auth.service'
import { TStoreService } from '../t-store.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  form: any = {
    email: null,
    password: null
  };
  
  isLoggedIn = false
  isLoginFailed = false
  errorMessage = ''
  roles: string[] = []
  
  constructor(
    private authService: AuthService, 
    private tokenStorage: TStoreService,
    private router: Router
  ) { }
  
  ngOnInit(): void {
    
    if (this.tokenStorage.getToken()) {
      console.log(this.tokenStorage)
      this.isLoggedIn = true
      this.roles = this.tokenStorage.getUser().roles
    }
  }

  onSubmit(): void {
    const { email, password } = this.form
    this.authService.login(email, password).subscribe({
      next: data => {
        this.tokenStorage.saveToken(data.accessToken)
        this.tokenStorage.saveUser(data)
        this.isLoginFailed = false
        this.isLoggedIn = true
        this.roles = this.tokenStorage.getUser().perms
        console.log(this.roles)
        this.loadDashboard()
      },
      error: err => {
        this.errorMessage = err.error.message
        this.isLoginFailed = true
      }
    })
  }

  loadDashboard(): void {
    this.router.navigate(['/dashboard']).then(() => window.location.reload())
  }
}
