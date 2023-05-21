import { Component, OnInit } from '@angular/core';
import { TStoreService } from '../t-store.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  isLoggedIn = false
  roles = []

  constructor(private tokenStorage: TStoreService, private router: Router) { }

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true
      this.roles = this.tokenStorage.getUser().roles
      this.router.navigate(['/dashboard'])
    } else {
      this.router.navigate(['/login'])
    }
  }

}
