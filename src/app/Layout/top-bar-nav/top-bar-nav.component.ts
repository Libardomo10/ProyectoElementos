import { Component, OnInit, Input } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from '../../usuarios/login/login.component';
import { readlink } from 'fs';

@Component({
  selector: 'app-top-bar-nav',
  templateUrl: './top-bar-nav.component.html',
  styleUrls: ['./top-bar-nav.component.css']
})
export class TopBarNavComponent implements OnInit {

  sesion: {};
  mostrar: boolean = true;

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
    this.obtenerSesion();
  }

  openLogIn() {
    const modalRef = this.modalService.open(LoginComponent);
  }

  obtenerSesion() {
    if (sessionStorage.getItem('Sesion') === undefined || sessionStorage.length === 0) {
      sessionStorage.clear();
    } else {
      this.sesion = JSON.parse(sessionStorage.getItem('Sesion'));
      if (this.sesion) {
        this.mostrar = false;
        console.log('Session......', this.sesion);
      } else {
        console.log('Session......', this.mostrar);
        this.mostrar = true;
      }
    }
  }

  cerrarSesion() {
    sessionStorage.removeItem('Sesion');
    sessionStorage.clear();
    this.mostrar = true;
    console.log('Session......', this.mostrar);
    location.reload();
  }
}
