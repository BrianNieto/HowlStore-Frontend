import { Injectable } from '@angular/core';
import {url} from "../config";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {CompraModel} from "../models/Compra.model";

@Injectable({
  providedIn: 'root'
})
export class CompraService {

  urlCompras:string = url + "compras"

  constructor(private httpClient:HttpClient) {}

  private getHttpOptions(){
    return {
      headers: new HttpHeaders({
        'content-type': 'application/json'
      })
    }
  }

  buyItem(compra: CompraModel):any {
    return this.httpClient.post(this.urlCompras, compra, this.getHttpOptions())
  }

  getAllComprasByUser():any {
    let id = localStorage.getItem("idUser")
    return this.httpClient.get(this.urlCompras + `/all/${id}`)
  }
}
