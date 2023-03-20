import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {User} from "../models/UserLogin.model";
import {url} from "../config";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  urlUser:string = url + "users/login"
  constructor(private httpClient:HttpClient) {}

  private getHttpOptions(){
    return {
      headers: new HttpHeaders({
        'content-type': 'application/json'
      })
    }
  }

  login(user:User){
      return this.httpClient.post(this.urlUser,user,this.getHttpOptions())
  }

}
