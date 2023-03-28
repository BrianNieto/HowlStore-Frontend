import { Injectable } from '@angular/core';
import {url} from "../config";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {User} from "../models/UserLogin.model";
import {UserCompleteModel} from "../models/UserComplete.model";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  urlUser:string = url + "users"
  constructor(private httpClient:HttpClient) {}

  private getHttpOptions(){
    return {
      headers: new HttpHeaders({
        'content-type': 'application/json'
      })
    }
  }

  login(user:User){
    return this.httpClient.post(this.urlUser + "/login",user,this.getHttpOptions())
  }

  register(userToRegister: UserCompleteModel) {
    return this.httpClient.post(this.urlUser,userToRegister,this.getHttpOptions())
  }

  getUser():any{
    let id = localStorage.getItem("idUser")
    return this.httpClient.get(this.urlUser + `/${id}`)
  }

  updateProfile(userToUpdate: UserCompleteModel):any {
    let id = localStorage.getItem("idUser")
    return this.httpClient.put(this.urlUser + `/${id}`,userToUpdate,this.getHttpOptions())
  }

  deleteProfile():any{
    let id = localStorage.getItem("idUser")
    return this.httpClient.delete(this.urlUser + `/${id}`)
  }

}
