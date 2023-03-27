import { Injectable } from '@angular/core';
import {url} from "../config";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {CompraModel} from "../models/Compra.model";

@Injectable({
  providedIn: 'root'
})
export class CompraService {

  urlCompras:string = url + "compras"
  urlItems:string = url + "items"

  constructor(private httpClient:HttpClient) {}

  private getHttpOptions(){
    return {
      headers: new HttpHeaders({
        'content-type': 'application/json'
      })
    }
  }

  getItem():any{
    let id = localStorage.getItem("idItem")
    return this.httpClient.get(this.urlItems + `/${id}`)
  }

  buyItem(compra: CompraModel):any {
    return this.httpClient.post(this.urlCompras, compra, this.getHttpOptions())
  }

}
