import { Injectable } from '@angular/core';
import {url} from "../config";
import {HttpClient} from "@angular/common/http";
import {ContactModel} from "../models/Contact.model";

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  urlContact:string = url + '/contact'

  constructor(private httpClient:HttpClient) { }

  createContact(contact:ContactModel){
    this.httpClient.post(this.urlContact,contact)
  }

}
