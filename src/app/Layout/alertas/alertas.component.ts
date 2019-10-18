import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-alertas',
  templateUrl: './alertas.component.html',
  styleUrls: ['./alertas.component.css']
})
export class AlertasComponent implements OnInit {

  private _success = new Subject<string>();

  staticAlertClosed = false;
  successMessage: string;

  sesion: {};

  constructor() { }

  ngOnInit() {
    this.obtenerSesion();
    setTimeout(() => this.staticAlertClosed = true, 20000);

    this._success.subscribe(message => this.successMessage = message);
    this._success.pipe(
      debounceTime(5000)
    ).subscribe(() => this.successMessage = null);
  }

  obtenerSesion() {
    this.sesion = JSON.parse(sessionStorage.getItem('Sesion'));
    if (this.sesion) {
      console.log('Session......', this.sesion);
      this.changeSuccessMessage();
    } else {
      console.log('Session......', this.staticAlertClosed);
      this.staticAlertClosed = false;
    }
  }

  public changeSuccessMessage() {
    this._success.next(`Ingreso correctamente.`);
  }

}
