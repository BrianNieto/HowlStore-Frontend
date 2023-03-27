import { Injectable } from '@angular/core';
import {url} from "../config";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {CompraModel} from "../models/Compra.model";

@Injectable({
  providedIn: 'root'
})
export class DetailsService {

  urlItems:string = url + "items"
  urlCompras:string = url + "compras"

  constructor(private httpCliente:HttpClient) {}

  private getHttpOptions(){
    return {
      headers: new HttpHeaders({
        'content-type': 'application/json'
      })
    }
  }

  getItem():any{
    let id = localStorage.getItem("idItem")
    return this.httpCliente.get(this.urlItems + `/${id}`)
  }

  buyItem(compra: CompraModel):any {
    return this.httpCliente.post(this.urlCompras, compra, this.getHttpOptions())
  }
}
