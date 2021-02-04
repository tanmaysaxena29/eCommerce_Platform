import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { LoginCredentials } from './login/user';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  login(loginCredentials: LoginCredentials)
  {
    
    console.log("Login Credentials: ", loginCredentials);
    return of({loginCredentials});
        }
}
