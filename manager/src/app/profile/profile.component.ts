import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TStoreService } from '../t-store.service';
import { UserService } from '../user.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  isLoggedIn = false
  roles = []

  email!: string
  firstName?: string
  middleName?: string
  lastName?: string
  address?: string
  phone?: string
  perms!: string

  constructor(
    private tokenStorage: TStoreService,
    private userService: UserService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true
      this.roles = this.tokenStorage.getUser().roles

      this.userService.getUserProfile(this.tokenStorage.getUser().userId).subscribe({
        next: (data) => {
          console.log(data)
          this.email = data.email
          this.firstName = data.firstName
          this.middleName = data.middleName
          this.lastName = data.lastName
          this.address = data.address
          this.phone = data.phone 
          this.perms = data.perms
        }, error: (err) => {
          console.log(err)
        }
      })

    } else {
      this.router.navigate(['/login'])
    }
  }

}
