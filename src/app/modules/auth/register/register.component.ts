import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  constructor(private readonly _formBuilder: FormBuilder, private _authenticationService: AuthenticationService) { }

  ngOnInit(): void {

  }

  email = new FormControl('', [Validators.required, Validators.email]);

  public registerForm = this._formBuilder.group({
    fullName: [null, [Validators.required]],
    email: [null, [Validators.email, Validators.required]],
    password: [null, [Validators.required]]
  });

  onRegister() {
    let fullName = this.registerForm.controls["fullName"].value;
    let email = this.registerForm.controls["email"].value;
    let password = this.registerForm.controls["password"].value;

    this._authenticationService.Register(fullName, email, password).subscribe({
      next(response) {
        console.log('Current Response: ', response);
      },
      error(msg) {
        console.log('Error: ', msg);
      }
    });
  }
}
