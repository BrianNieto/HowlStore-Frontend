import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {CompraModel} from "../../models/Compra.model";
import {Router} from "@angular/router";
import {CompraService} from "../../services/compra.service";
import {ItemService} from "../../services/item.service";
import {CategoryModel} from "../../models/Category.model";
import {CategoryService} from "../../services/category.service";
import {UserService} from "../../services/user.service";
import {ItemModel} from "../../models/Item.model";
import {UserCompleteModel} from "../../models/UserComplete.model";
import Swal from "sweetalert2";
import {switchMap} from "rxjs";

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
  image1!:string;
  item!:ItemModel;
  user!:UserCompleteModel;

  constructor(private compraService:CompraService,private userService:UserService,private categoryService:CategoryService, private itemService:ItemService, private router:Router) { }

  ngOnInit(){
    this.itemService.getItem().subscribe(
      (res:any) => {
        this.nombre = res.nombreItem
        this.estado = res.estadoItem
        this.categoria = res.category.nombreCategoria
        this.precio = res.precioItem
        this.image1 = res.img1
      })
    this.categoryService.getAllCategories().subscribe(
      (res:any) => {
        this.categories = res;
      }
    )
  }

  comprarItem(): any {
    this.itemService.getItem().pipe(
      switchMap((item: any) => {
        this.item = item;
        return this.userService.getUser();
      }),
      switchMap((user: any) => {
        this.user = user;
        console.log(this.user);
        let compra: CompraModel = {
          comentario: "asd",
          estadoPedido: "PEDIDO",
          fecha: "",
          item: this.item,
          user: this.user
        };
        return this.compraService.buyItem(compra);
      })
    ).subscribe(
      (res: any) => {
        Swal.fire({
          position: 'center',
          icon: 'success',
          showConfirmButton: false,
          timer: 1500
        });
        this.router.navigate(["/store"]);
      },
      (error: any) => {
        console.error(error);
      }
    );
  }

  filterCategory(category:number) {
    this.itemService.getAllItemsByCategory(category).subscribe(
      () => {
        this.router.navigate(["/store"])
      })
  }

}
