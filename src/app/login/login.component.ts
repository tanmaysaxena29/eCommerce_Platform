import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'shopMart-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  loginForm: any;

  email = new FormControl('',[Validators.required, Validators.pattern(/^[A-z]*@[a-z]+\.[a-z]$/)])
  password = new FormControl('', [Validators.required, Validators.pattern(/^^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/)]);

  constructor(private router: Router, private authService: AuthService) { }


  getErrorMessage(field: string)
  {
    if(field == "email")
    {
      return this.email.hasError('required') ? 'You must enter email' :
      this.email.hasError('pattern') ? 'Email should be of type abc@xyz.pqr':
      '';

    }
    else if(field == "password")
  {
    return this.password.hasError('required') ? 'Password is mandatory' :
    this.password.hasError('pattern') ? 'Password should contain 1 numeric, 1 lower and upper character & 1 special symbol and should be of atleast 8 characters':
    '';
  } 
 }
  login()
  {
    this.loginForm = {
      email: this.email.value,
      password: this.password.value
    }
    this.authService.login(this.loginForm).subscribe(
      (res)=> {
        this.router.navigate(['']);
      },
      (err)=> {
        throw err;
      }
    )
   
  }

  ngOnInit(): void {
  }

}
