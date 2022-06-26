import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { TStoreService } from '../t-store.service'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
//  private roles: string[] = []
//  isLoggedIn = false

  constructor(
    private router: Router,
    private tokenStorageService: TStoreService
  ) { }

  ngOnInit(): void {
  /*
    this.isLoggedIn = !!this.tokenStorageService.getToken()
    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser()
    } else {
      this.loadLogin()
    }
  */
  }
  /*
  loadLogin(): void {
    this.router.navigate(['/login'])
  }
  */

}
