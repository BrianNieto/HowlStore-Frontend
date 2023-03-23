import { Injectable } from '@angular/core';
import {url} from "../config";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DetailsService {

  urlDetails:string = url + "items"

  constructor(private httpCliente:HttpClient) {}

  getItem():any{
    let id = localStorage.getItem("idItem")
    return this.httpCliente.get(this.urlDetails + `/${id}`)
  }

}
