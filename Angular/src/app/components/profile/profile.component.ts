import {Component, OnInit} from '@angular/core';
import {ProfileService} from "../../services/profile.service";
import {UserCompleteModel} from "../../models/UserComplete.model";
import {Form, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {PersonaModel} from "../../models/Persona.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profileForm: FormGroup;
  inputName!: HTMLInputElement;
  inputLastname!: HTMLInputElement;
  inputMail!: HTMLInputElement;
  inputPassword!: HTMLInputElement;


  constructor(private service: ProfileService, private formBuilder: FormBuilder, private router: Router) {
    this.profileForm = this.formBuilder.group({
      mail: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required]],
      firstname: ["", [Validators.required]],
      lastname: ["", [Validators.required]]
    })
  }

  ngOnInit() {
    this.service.viewProfile().subscribe(
      (res: any) => {
        this.inputName = document.getElementById("nombre") as HTMLInputElement;
        this.inputLastname = document.getElementById("apellido") as HTMLInputElement;
        this.inputMail = document.getElementById("mail") as HTMLInputElement;
        this.inputPassword = document.getElementById("password") as HTMLInputElement;
        this.inputName.value = res.persona.firstname
        this.inputLastname.value = res.persona.lastname
        this.inputMail.value = res.mail
        this.inputPassword.value = res.password
      })
  }

  updateUser() {
    let personaToUpdate: PersonaModel = {firstname: this.inputName.value, lastname: this.inputLastname.value}
    let userToUpdate: UserCompleteModel = {
      mail: this.inputMail.value,
      password: this.inputPassword.value,
      persona: personaToUpdate
    }
    this.service.updateProfile(userToUpdate).subscribe((res: any) => {
      this.router.navigate(["/profile"])
    })
  }

  deleteUser() {
    this.service.deleteProfile().subscribe((res:any) => {
      localStorage.clear()
      this.router.navigate([""])
    })
  }
}
