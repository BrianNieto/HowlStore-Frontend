import {Component, OnInit} from '@angular/core';
import {RecomendacionModel} from "../../models/Recomendacion.model";
import {RecomendacionService} from "../../services/recomendacion.service";
import {ItemModel} from "../../models/Item.model";
import {ItemService} from "../../services/item.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  recomendaciones:RecomendacionModel[] = [];

  itemsToShow:ItemModel[] = [];
  carousel:any;
  leftArrow:any;
  rightArrow:any;

  constructor(private recomendacionService:RecomendacionService, private itemService:ItemService, private router:Router) {}

  ngOnInit() {
    localStorage.removeItem("idItem");
    this.recomendacionService.getAllRecomendaciones().subscribe(
      (res:any) => {
        this.recomendaciones = res;
      })
    this.itemService.getAllItems().subscribe(
      (res:any) => {
        this.itemsToShow = res;
      })
    this.carousel = document.querySelectorAll(".div-carousel");
    this.leftArrow = document.querySelectorAll(".left-arrow");
    this.rightArrow = document.querySelectorAll(".right-arrow");

    this.carousel.forEach((item: HTMLElement, i: number) => {
      let containerDimensions = item.getBoundingClientRect();
      let containerWidth = containerDimensions.width/3;


      this.rightArrow[i].addEventListener("click", () => {
        item.scrollLeft += containerWidth;
      });


      this.leftArrow[i].addEventListener("click", () => {
        item.scrollLeft -= containerWidth;
      });
    });

  }

  navigateTo(item:number) {
    localStorage.setItem("idItem",item.toString())
    this.router.navigate(["/details"])
  }
}
