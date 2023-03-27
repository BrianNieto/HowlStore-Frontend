import { Component } from '@angular/core';
import {FormBuilder, FormGroup, NgForm, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {UserCompleteModel} from "../../models/UserComplete.model";
import {PersonaModel} from "../../models/Persona.model";
import emailjs, {EmailJSResponseStatus} from "@emailjs/browser";
import Swal from "sweetalert2";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  registerForm: FormGroup

  constructor(private formBuilder:FormBuilder, private service:UserService, private router:Router) {
    this.registerForm = this.formBuilder.group({
                                                          mail: ["", [Validators.required, Validators.email]],
                                                          password: ["",[Validators.required]],
                                                          firstname: ["",[Validators.required]],
                                                          lastname: ["",[Validators.required]]
                                                      })
  }

  registerSubmit(e:Event) {
    let personaToRegister:PersonaModel = {firstname:this.registerForm.value.firstname, lastname:this.registerForm.value.lastname}
    let userToRegister:UserCompleteModel = {mail: this.registerForm.value.mail, password: this.registerForm.value.password, persona:personaToRegister}
    this.service.register(userToRegister).subscribe(
                                                (res:any) => {
                                                                emailjs.sendForm('service_gsl1x2c', 'template_3bc9ck9', e.target as HTMLFormElement, 'jSlj8euVMZ7qd-PHB')
                                                                  .then(
                                                                    () => {
                                                                      Swal.fire("Se ha registrado con exito!")
                                                                        .then(()=> {
                                                                          this.router.navigate(["/login"])
                                                                        })
                                                                  })
                                                              }
                                                            )
  }
}
