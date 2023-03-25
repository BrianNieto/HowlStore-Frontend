import {Component, OnInit} from '@angular/core';
import {RecomendacionModel} from "../../models/Recomendacion.model";
import {RecomendacionService} from "../../services/recomendacion.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  recomendaciones:RecomendacionModel[] = [];

  constructor(private service:RecomendacionService) {}

  ngOnInit() {
    this.service.getAllRecomendaciones().subscribe(
      (res:any) => {
        this.recomendaciones = res;
      }
    )
    }

}
