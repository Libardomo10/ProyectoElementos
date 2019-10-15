import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UsuarioService } from '../servicios/usuario.service';

@Component({
  selector: 'app-registrar-usuarios',
  templateUrl: './registrar-usuarios.component.html',
  styleUrls: ['./registrar-usuarios.component.css']
})
export class RegistrarUsuariosComponent implements OnInit {

  form: FormGroup;
  usuarios: any[];

  constructor(private usuarioHttp: UsuarioService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.listarUsuario();
    this.crearFormulario();
  }

  crearFormulario() {
    this.form = this.fb.group({
      id: 0,
      nombre: '',
      apellido: '',
      idUniversidad: 0,
      nombreUsuario: '',
      contrasenia: '',
      idRolFK: 0
    });
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

  guardarUsuario() {
    if (this.usuarios.length > 0) {
      this.form.value.id = this.usuarios.length + 1;
    }
    this.form.value.idRolFK = 3;
    this.usuarioHttp.agregarUsuario(this.form.value);
  }



}
