import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../usuarios/servicios/usuario.service';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-agregar-comentario',
  templateUrl: './agregar-comentario.component.html',
  styleUrls: ['./agregar-comentario.component.css']
})
export class AgregarComentarioComponent implements OnInit {

  private _success = new Subject<string>();

  staticAlertClosed = false;
  successMessage: string;

  form: FormGroup;

  misMensajes: string;
  comentarios: any[];
  sesion = {
    id: 0,
    nombre: '',
    apellido: ''
  };

  constructor(public usuarioHttp: UsuarioService,
    private fb: FormBuilder) { }

  ngOnInit() {
    this.obtenerSesion();
    this.listarComentarios();
    this.comentario();

    setTimeout(() => this.staticAlertClosed = true, 20000);

    this._success.subscribe(message => this.successMessage = message);
    this._success.pipe(
      debounceTime(5000)
    ).subscribe(() => this.successMessage = null);
  }

  listarComentarios() {
    let listaComets = this.usuarioHttp.listarComentarios();
    listaComets.snapshotChanges().subscribe(
      resp => {
        this.comentarios = [];
        resp.forEach(item => {
          let comentario = item.payload.toJSON();
          comentario['$key'] = item.key;
          if (!comentario['archived'] || comentario['archived'] == false) {
            this.comentarios.push(comentario);
            // Mis Mensajes *****************************************
            for (let i = 0; i < this.comentarios.length; i++) {
              if (this.comentarios[i].idUsuario == this.sesion.id) {
                this.comentarios[i].nombre = 'Tú';
                this.comentarios[i].apellido = '';
              }
            }
            // Fin de Mis Mensajes **********************************
          }
        })
      }
    );
  }

  obtenerSesion() {
    if (sessionStorage.getItem('Sesion') === undefined || sessionStorage.length === 0) {
      sessionStorage.clear();
    } else {
      this.sesion = JSON.parse(sessionStorage.getItem('Sesion'));
    }
  }

  comentario() {
    this.form = this.fb.group({
      idUsuario: 0,
      nombre: '',
      apellido: '',
      Comentario: ''
    });
  }

  agregarComentario() {
    this.form.value.idUsuario = this.sesion.id;
    this.form.value.nombre = this.sesion.nombre;
    this.form.value.apellido = this.sesion.apellido;
    if (this.form.value.Comentario == "") {
      return this._success.next('Comenta algo....');
    } else {
      this.usuarioHttp.agregarComentario(this.form.value);
      this._success.next('Enviando...');
      this.comentario();
    }
    this.listarComentarios();
  }
}
