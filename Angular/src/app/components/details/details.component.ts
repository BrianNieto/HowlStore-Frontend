import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {CompraModel} from "../../models/Compra.model";
import {Router} from "@angular/router";
import {CompraService} from "../../services/compra.service";
import {ItemService} from "../../services/item.service";
import {CategoryModel} from "../../models/Category.model";
import {CategoryService} from "../../services/category.service";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit{

  categories:CategoryModel[] = [];
  nombre!:string;
  estado!:string;
  categoria!:string;
  precio!:string;
  img1!:string;
  img2!:string;
  img3!:string;
  constructor(private compraService:CompraService,private categoryService:CategoryService, private itemService:ItemService, private router:Router) { }

  ngOnInit(){
    this.itemService.getItem().subscribe(
      (res:any) => {
        this.nombre = res.nombreItem
        this.estado = res.estadoItem
        this.categoria = res.category.nombreCategoria
        this.precio = res.precioItem
        this.img1 = res.img1
        this.img2 = res.img2
        this.img3 = res.img3
        console.log(res)
      })
    this.categoryService.getAllCategories().subscribe(
      (res:any) => {
        this.categories = res;
      }
    )
  }

  comprarItem():any {
    let item:number = parseInt((localStorage.getItem("idItem") as string));
    let user:number = parseInt((localStorage.getItem("idUser") as string));
    let compra:CompraModel = {comentario:"asd",estadoPedido:"PEDIDO",idItem:item,idUser:user}
    this.compraService.buyItem(compra).subscribe(
      (res:any) => {
        this.router.navigate(["/store"])
      });
  }

  filterCategory(category:number) {
    this.itemService.getAllItemsByCategory(category).subscribe(
      (res:any) => {
        this.router.navigate(["/store"])
      })
  }

}
