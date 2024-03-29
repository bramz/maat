import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs'

const AUTH_API = 'http://localhost:3001/auth/'

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}

@Injectable({
    providedIn: 'root'
})

export class AuthService {
    constructor(
        private http: HttpClient
    ) {
    }

    login(email: string, password: string): Observable<any> {
        return this.http.post(AUTH_API + 'login', {
            email,
            password
        }, httpOptions)
    }
    register(email: string, password1: string, password2: string): Observable<any> {
        return this.http.post(AUTH_API + 'register', {
          email,
          password1,
          password2
        }, httpOptions);
      }
}