import { HTTP_INTERCEPTORS, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { TStoreService } from './t-store.service';
import { Observable } from 'rxjs';

// Spring boot compatability
// const TOKEN_HEADER_KEY = 'Authorization';

// express token header
const TOKEN_HEADER_KEY = 'x-access-token';


@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor(private token: TStoreService) { }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let authReq = req;
        const token = this.token.getToken()
        if (token != null) {
            // sprint boot compat
            // authReq = req.clone({ headers: req.headers.set(TOKEN_HEADER_KEY, 'Bearer ' + token) });
            authReq = req.clone({ headers: req.headers.set(TOKEN_HEADER_KEY, token) });
        }
        return next.handle(authReq);
    }
}

export const authInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
]