import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {StorageService} from "../../services/storage.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{

  session:boolean = false;

  constructor(private router:Router,private storage:StorageService) {
  }

  ngOnInit(){
   this.storage.watchStorage().subscribe(
     res => {
       if(res == 'lleno'){
         this.session = true;
       }
       else {
         this.session = false;
       }
     })
  }

  salirSesion() {
    this.session = false
    this.storage.removeItem("idUser");
  }

}
