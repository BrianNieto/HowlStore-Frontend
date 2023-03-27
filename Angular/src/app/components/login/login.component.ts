import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {User} from "../../models/UserLogin.model";
import {HttpErrorResponse} from "@angular/common/http";
import {Router} from "@angular/router";
import {StorageService} from "../../services/storage.service";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  loginForm: FormGroup;

  constructor(private formBuilder:FormBuilder, private service:UserService, private router:Router, private storage:StorageService) {
    this.loginForm = this.formBuilder.group({
                                              mail: ["", [Validators.required, Validators.email]],
                                              password: ["",[Validators.required]]
                                              })
  }

  ngOnInit() {
    localStorage.removeItem("idItem");
  }


  loginSubmit() {
    let userToValidate:User = {mail: this.loginForm.value.mail, password : this.loginForm.value.password}
    this.service.login(userToValidate).subscribe({
                                                next: res => {
                                                        this.storage.setItem("idUser",res.toString())
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
