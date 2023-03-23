import { Component } from '@angular/core';
import {ContactService} from "../../services/contact.service";
import {ContactModel} from "../../models/Contact.model";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  newContact!:ContactModel;

  constructor(private service:ContactService) {}

  createContactRequest() {
    this.service.createContact(this.newContact)
    }

}
