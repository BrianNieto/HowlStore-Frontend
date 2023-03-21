import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  recomendaciones = [
                  {
                    nombre: "Robin 'ropz' Kool",
                    comentario: "lorem lorem lorem",
                    fecha: "24/07/2022",
                    imagen: "/assets/cards/ropz.jpeg"
                  },
                  {
                    nombre: "Nikola 'NiKo' Kovač",
                    comentario: "lorem lorem lorem",
                    fecha: "10/11/2022",
                    imagen: "/assets/cards/niko.png"
                  },
                  {
                    nombre: "Keith 'NAF' Markovic",
                    comentario: "lorem lorem lorem",
                    fecha: "02/01/2023",
                    imagen: "/assets/cards/NAF.png"
      }
    ];

}
