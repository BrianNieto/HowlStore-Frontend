import { Injectable } from '@angular/core';
import {url} from "../config";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  urlItems:string = url + "items"
  constructor(private httpClient:HttpClient) { }

  getAllItems():any{
    return this.httpClient.get(this.urlItems)
  }

  getAllItemsByCategory(category:number):any{
    return this.httpClient.get(this.urlItems + "/all/" + `${category}`)
  }

}
