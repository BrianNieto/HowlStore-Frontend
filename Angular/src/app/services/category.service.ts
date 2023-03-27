import { Injectable } from '@angular/core';
import {url} from "../config";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  urlCategories:string = url + "categorias"

  constructor(private httpClient:HttpClient) {}

  getAllCategories():any {
    return this.httpClient.get(this.urlCategories)
  }

}
