import { Component } from '@angular/core';
import {ItemModel} from "../../models/Item.model";
import {StoreService} from "../../services/store.service";
import {CategoryModel} from "../../models/Category.model";

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent {

  items:ItemModel[] = []
  categories:CategoryModel[] = []

  constructor(private service:StoreService) { }

  ngOnInit(){
    this.service.getAllItems().subscribe(
      (res:any) => {
        this.items = res
      })
    this.service.getAllCategories().subscribe(
      (res:any) => {
        this.categories = res
        console.log(res)
      }
    )
  }

  seeDetails() {

  }
}
