import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{

  session:boolean = false;

  constructor(private router:Router) {
  }

  ngOnInit(){
    if (localStorage.getItem("idUser")){
      this.session = true;
    }
  }

  salirSesion() {
    this.session = false
    localStorage.removeItem("idUser");
  }
}
