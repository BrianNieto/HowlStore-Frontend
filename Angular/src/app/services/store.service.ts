import { Injectable } from '@angular/core';
import {url} from "../config";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  urlItems:string = url + "items"
  urlCategories:string = url + "categorias"

  constructor(private httpClient:HttpClient) {}

  getAllItems():any{
    return this.httpClient.get(this.urlItems)
  }

  getAllCategories():any {
    return this.httpClient.get(this.urlCategories)
  }

}
