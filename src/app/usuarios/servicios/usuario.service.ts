import { Injectable } from '@angular/core';
// import { App } from '../servicio/app'; 
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  listaRegistros: AngularFireList<any[]>;

  constructor(private db: AngularFireDatabase) { }

  listaUsuarios() {
    this.listaRegistros = this.db.list('/usuarios') as AngularFireList<any[]>;
    return this.listaRegistros;
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
    // this.listaRegistros.push(usuario);
  }
}
