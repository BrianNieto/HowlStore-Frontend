import { Injectable } from '@angular/core';
import {url} from "../config";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class RecomendacionService {

  urlRecomendaciones = url + "recomendaciones";
  constructor(private httpClient:HttpClient) { }

  getAllRecomendaciones():any {
    return this.httpClient.get(this.urlRecomendaciones)
  }

}
