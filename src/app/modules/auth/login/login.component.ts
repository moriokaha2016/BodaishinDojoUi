import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Constraints } from 'src/app/Helper/constraints';
import { ResponseModel } from 'src/app/models/responseModel';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm = this._formBuilder.group({
    email: [null, [Validators.email, Validators.required]],
    password: [null, [Validators.required]]
  });

  constructor(
    private readonly _formBuilder: FormBuilder,
    private _authenticationService: AuthenticationService,
    private _router: Router) { }

  ngOnInit(): void {

  }

  onSubmit() {
    let email = this.loginForm.controls["email"].value;
    let password = this.loginForm.controls["password"].value;

    this._authenticationService.Login(email, password).subscribe(
      (user: ResponseModel) => {
        if (user && user.responseCode == 1) {
          var userState = user;
          localStorage.setItem(Constraints.USER_KEY, JSON.stringify(userState));

          this._router.navigate(["/home"]);

          // if(user.type == "admin"){
          //   // if admin navigate to admin role side
          //   // this._router.navigate(["/admin"]);
          // }else{
          //   // this._router.navigate(["/admin"]);
          // }

        } else {
          localStorage.setItem(Constraints.USER_KEY, "");
        }
    });
  }
}
