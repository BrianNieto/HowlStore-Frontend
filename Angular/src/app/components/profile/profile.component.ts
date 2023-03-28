import {Component, OnInit} from '@angular/core';
import {UserCompleteModel} from "../../models/UserComplete.model";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {PersonaModel} from "../../models/Persona.model";
import {Router} from "@angular/router";
import {UserService} from "../../services/user.service";
import Swal from "sweetalert2";
import {CompraModel} from "../../models/Compra.model";
import {CompraService} from "../../services/compra.service";

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
  nombre!:string;
  apellido!:string;
  compras:CompraModel[] = [];


  constructor(private service: UserService, private compraService:CompraService, private formBuilder: FormBuilder, private router: Router) {
    this.profileForm = this.formBuilder.group({
      mail: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required]],
      firstname: ["", [Validators.required]],
      lastname: ["", [Validators.required]]
    })
  }

  ngOnInit() {
    if (localStorage.getItem("idUser") == null){
      this.router.navigate([""])
    }
    this.service.getUser().subscribe(
      (res: any) => {
        this.inputName = document.getElementById("nombre") as HTMLInputElement;
        this.inputLastname = document.getElementById("apellido") as HTMLInputElement;
        this.inputMail = document.getElementById("mail") as HTMLInputElement;
        this.inputPassword = document.getElementById("password") as HTMLInputElement;
        this.inputName.value = res.persona.firstname
        this.inputLastname.value = res.persona.lastname
        this.inputMail.value = res.mail
        this.inputPassword.value = res.password
        this.nombre = res.persona.firstname
        this.apellido = res.persona.lastname
      })
    this.compraService.getAllComprasByUser().subscribe(
      (res:any) => {
        this.compras = res;
      }
    )
  }

  updateUser() {
    Swal.fire({
      title: '¿Está seguro que deseas actualizar sus datos?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Actualizar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
          let personaToUpdate: PersonaModel = {firstname: this.inputName.value, lastname: this.inputLastname.value}
          let userToUpdate: UserCompleteModel = {
            mail: this.inputMail.value,
            password: this.inputPassword.value,
            persona: personaToUpdate
          }
          this.service.updateProfile(userToUpdate).subscribe(() => {
            this.router.navigate(["/profile"])
          })
        Swal.fire({
          icon: 'success',
          title:'Tus datos han sido actualizados',
          timer: 2500,
          timerProgressBar: true,
          showConfirmButton: true,
          confirmButtonText: 'OK'
        });
      }
    });
  }

  deleteUser() {
    Swal.fire({
      title: '¿Está seguro que desea eliminar su cuenta?',
      text: "Esta acción no se puede deshacer.",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Eliminar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.service.deleteProfile().subscribe((res:any) => {
          localStorage.clear()
          this.router.navigate([""])
        })
        Swal.fire({
          icon: 'success',
          title:'Tu cuenta fue eliminada con exito',
          text: 'Has sido redirigido a la página de inicio.',
          timer: 2500,
          timerProgressBar: true,
          showConfirmButton: true,
          confirmButtonText: 'OK'
        });
      }
    });
  }
}
