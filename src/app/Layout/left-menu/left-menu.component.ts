import { Component, OnInit } from '@angular/core';
import { Session } from 'protractor';

@Component({
  selector: 'app-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.css']
})
export class LeftMenuComponent implements OnInit {

  sesion: {};
  mostrarBlog: boolean = false;
  mostrar: boolean = false;

  constructor() { }

  ngOnInit() {
    this.obtenerSesion();
  }

  obtenerSesion() {
    let sesionUser = JSON.parse(sessionStorage.getItem('Sesion'));
    if (sesionUser) {
      this.sesion = sesionUser;
      if (sesionUser.idRolFK == 1 || sesionUser.idRolFK == 2) {
        this.mostrar = true;
        this.mostrarBlog = true;
      } else if (sesionUser.idRolFK == 3) {
        this.mostrarBlog = true;
      } else {
        this.mostrar = false;
        this.mostrarBlog = false;
      }
      console.log('Session......', this.sesion);
    } else {
      console.log('Session......', this.mostrar);
      this.mostrar = false;
      this.mostrarBlog = false;
    }
  }

}
