import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {User} from "../../models/UserLogin.model";
import {LoginService} from "../../services/login.service";
import {HttpErrorResponse} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private formBuilder:FormBuilder, private service:LoginService, private router:Router) {
    this.loginForm = this.formBuilder.group({
                                              mail: ["", [Validators.required, Validators.email]],
                                              password: ["",[Validators.required]]
                                                })
  }


  loginSubmit() {
    let userToValidate:User = {mail: this.loginForm.value.mail, password : this.loginForm.value.password}
    this.service.login(userToValidate).subscribe({
                                                next: res => {
                                                        localStorage.setItem("mail",userToValidate.mail)
                                                        this.router.navigate([""])
                                                      },
                                                error: (err: HttpErrorResponse) => {
                                                  if (err.error instanceof Error) {
                                                    console.log('Error de cliente o red', err.error.message);

                                                  } else {
                                                    console.log(err.error);
                                                  }
                                                }
    })
  }
}
