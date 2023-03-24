import { Component } from '@angular/core';
import {ContactService} from "../../services/contact.service";
import {ContactModel} from "../../models/Contact.model";
import {NgForm} from "@angular/forms";
import {Router} from "@angular/router";
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  newContact:ContactModel = new ContactModel("","","","","");

  constructor(private service:ContactService,private router:Router) {}

  createContactRequest(form:NgForm) {
    this.service.createContact(this.newContact).subscribe(
      (res:any) => {
        Swal.fire("Datos enviados!").then(()=> {
          this.router.navigate([""])
        })
      }
    )
    }

}
