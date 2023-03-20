import { Injectable } from '@angular/core';
import {UserRegisterModel} from "../models/UserRegister.model";
import {url} from "../config";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  urlRegister:string = url + "users"

  constructor(private httpClient:HttpClient) {}

  private getHttpOptions(){
    return {
      headers: new HttpHeaders({
        'content-type': 'application/json'
      })
    }
  }

  register(userToRegister: UserRegisterModel) {
    return this.httpClient.post(this.urlRegister,userToRegister,this.getHttpOptions())
  }

}
