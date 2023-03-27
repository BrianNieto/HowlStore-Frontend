import {Component, OnInit} from '@angular/core';
import {ContactService} from "../../services/contact.service";
import {ContactModel} from "../../models/Contact.model";
import {NgForm} from "@angular/forms";
import {Router} from "@angular/router";
import Swal from 'sweetalert2';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit{
  newContact:ContactModel = new ContactModel("","","","","");

  constructor(private service:ContactService,private router:Router) {}

  ngOnInit() {
    localStorage.removeItem("idItem");
  }

  public sendEmail(e: Event, form: NgForm) {
    this.service.createContact(this.newContact).subscribe(
      () => {
        if (form.valid) {
          emailjs.sendForm('service_gsl1x2c', 'template_dw6ke2p', e.target as HTMLFormElement, 'jSlj8euVMZ7qd-PHB')
            .then(() => {
                Swal.fire("Datos enviados!")
                  .then(()=> {
                    this.router.navigate([""])
                  })
            }, (error) => {
              console.log(error.text);
            });
        }
      })
  }

}
