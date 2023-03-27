import {Component, OnInit} from '@angular/core';
import {ItemModel} from "../../models/Item.model";
import {CategoryModel} from "../../models/Category.model";
import {Router} from "@angular/router";
import {ItemService} from "../../services/item.service";
import {CategoryService} from "../../services/category.service";

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit{

  items:ItemModel[] = []
  categories:CategoryModel[] = []

  constructor(private categoryService:CategoryService, private router:Router, private itemService:ItemService) { }

  ngOnInit(){
    this.itemService.getAllItems().subscribe(
      (res:any) => {
        this.items = res
      })
    this.categoryService.getAllCategories().subscribe(
      (res:any) => {
        this.categories = res
      }
    )
  }

  seeDetails(idItem:number) {
    localStorage.setItem("idItem",idItem.toString());
    this.router.navigate(["/details"])
  }

  filterCategory(category:number) {
    this.itemService.getAllItemsByCategory(category).subscribe(
      (res:any) => {
        this.items = res;
      }
    )
  }

}
