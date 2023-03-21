import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {RegisterService} from "../../services/register.service";
import {Router} from "@angular/router";
import {UserCompleteModel} from "../../models/UserComplete.model";
import {HttpErrorResponse} from "@angular/common/http";
import {PersonaModel} from "../../models/Persona.model";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  registerForm: FormGroup

  constructor(private formBuilder:FormBuilder, private registerService:RegisterService, private router:Router) {
    this.registerForm = this.formBuilder.group({
                                                          mail: ["", [Validators.required, Validators.email]],
                                                          password: ["",[Validators.required]],
                                                          firstname: ["",[Validators.required]],
                                                          lastname: ["",[Validators.required]]
                                                      })
  }

  registerSubmit() {
    let personaToRegister:PersonaModel = {firstname:this.registerForm.value.firstname, lastname:this.registerForm.value.lastname}
    let userToRegister:UserCompleteModel = {mail: this.registerForm.value.mail, password: this.registerForm.value.password, persona:personaToRegister}
    this.registerService.register(userToRegister).subscribe({
                                                              next: res => {
                                                                  this.router.navigate(["/login"])
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
