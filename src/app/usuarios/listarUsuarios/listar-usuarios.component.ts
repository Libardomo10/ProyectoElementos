import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../servicios/usuario.service';

@Component({
  selector: 'app-listar-usuarios',
  templateUrl: './listar-usuarios.component.html',
  styleUrls: ['./listar-usuarios.component.css']
})
export class ListarUsuariosComponent implements OnInit {

  usuarios: any[];

  constructor(public usuarioHttp: UsuarioService) { }

  ngOnInit() {
    this.listarUsuario();
  }

  listarUsuario() {
    debugger
    let lista = this.usuarioHttp.listaUsuarios();
    lista.snapshotChanges().subscribe(
      resp => {
        console.log('Respuesta del servicio ....', resp);
        this.usuarios = [];
        resp.forEach(item => {
          let usuario = item.payload.toJSON();
          usuario['$key'] = item.key;
          console.log("item que se imprime.......", usuario)
          debugger
          if (!usuario['archived'] || usuario['archived'] == false) {
            this.usuarios.push(usuario);
          }
        })
      }
    );
  }

}
