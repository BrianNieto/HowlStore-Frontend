import {Component, ElementRef, ViewChild} from '@angular/core';
import {DetailsService} from "../../services/details.service";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {

  nombre!:string
  estado!:string;
  categoria!:string;
  precio!:string;
  img1!:string;
  img2!:string;
  img3!:string;
  constructor(private service:DetailsService) { }

  ngOnInit(){
    this.service.getItem().subscribe(
      (res:any) => {
        this.nombre = res.nombreItem
        this.estado = res.estadoItem
        this.categoria = res.category.nombreCategoria
        this.precio = res.precioItem
        this.img1 = res.img1
        this.img2 = res.img2
        this.img3 = res.img3
        console.log(res)
      }
    )
  }

}
