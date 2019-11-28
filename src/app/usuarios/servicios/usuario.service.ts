import { Injectable } from '@angular/core';
// import { App } from '../servicio/app'; 
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  listaRegistros: AngularFireList<any[]>;
  listaComentarios: AngularFireList<any[]>;

  constructor(
    private db: AngularFireDatabase,
    private http: HttpClient) {
  }

  listaUsuarios() {
    this.listaRegistros = this.db.list('/usuarios') as AngularFireList<any[]>;
    return this.listaRegistros;
  }

  listarComentarios() {
    this.listaComentarios = this.db.list('/comentarios') as AngularFireList<any[]>;
    return this.listaComentarios;
  }

  actualizarUsuario(key, usuario) {
    this.listaRegistros.update(key, usuario);
  }

  eliminarUsuario(key) {
    this.listaRegistros.remove(key);
  }

  agregarUsuario(usuario) {
    this.listaRegistros = this.db.list('/usuarios') as AngularFireList<any[]>;
    this.listaRegistros.push(usuario);
  }

  agregarComentario(objComentario) {
    this.listaComentarios = this.db.list('/comentarios') as AngularFireList<any[]>;
    this.listaComentarios.push(objComentario);
  }
}
