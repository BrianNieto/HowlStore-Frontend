import { Injectable } from '@angular/core';
import {url} from "../config";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {UserCompleteModel} from "../models/UserComplete.model";

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  urlProfile:string = url + "users"
  constructor(private httpClient:HttpClient) {}

  private getHttpOptions(){
    return {
      headers: new HttpHeaders({
        'content-type': 'application/json'
      })
    }
  }

  viewProfile():any{
    let id = localStorage.getItem("userId")
    return this.httpClient.get(this.urlProfile + `/${id}`)
  }

  updateProfile(userToUpdate: UserCompleteModel):any {
    let id = localStorage.getItem("userId")
    return this.httpClient.put(this.urlProfile + `/${id}`,userToUpdate,this.getHttpOptions())
  }

  deleteProfile():any{
    let id = localStorage.getItem("userId")
    return this.httpClient.delete(this.urlProfile + `/${id}`)
  }

}
