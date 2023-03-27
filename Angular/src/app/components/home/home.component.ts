import {Component, OnInit} from '@angular/core';
import {RecomendacionModel} from "../../models/Recomendacion.model";
import {RecomendacionService} from "../../services/recomendacion.service";
import {ItemModel} from "../../models/Item.model";
import {ItemService} from "../../services/item.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  recomendaciones:RecomendacionModel[] = [];

  itemsToShow:ItemModel[] = [];

  carousel!: NodeListOf<Element>;
  leftArrow!: NodeListOf<Element>;
  rightArrow!: NodeListOf<Element>;

  constructor(private recomendacionService:RecomendacionService, private itemService:ItemService) {}

  ngOnInit() {
    this.recomendacionService.getAllRecomendaciones().subscribe(
      (res:any) => {
        this.recomendaciones = res;
      })
    this.itemService.getAllItems().subscribe(
      (res:any) => {
        this.itemsToShow = res;
      })
    this.carousel = document.querySelectorAll("div-carousel");
    this.leftArrow = document.querySelectorAll("left-arrow");
    this.rightArrow = document.querySelectorAll("right-arrow");



  }

}
