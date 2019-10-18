import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UsuarioService } from '../servicios/usuario.service';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-registrar-usuarios',
  templateUrl: './registrar-usuarios.component.html',
  styleUrls: ['./registrar-usuarios.component.css']
})
export class RegistrarUsuariosComponent implements OnInit {

  private _success = new Subject<string>();

  staticAlertClosed = false;
  successMessage: string;

  form: FormGroup;
  usuarios: any[];

  constructor(private usuarioHttp: UsuarioService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.listarUsuario();
    this.crearFormulario();
    setTimeout(() => this.staticAlertClosed = true, 20000);

    this._success.subscribe(message => this.successMessage = message);
    this._success.pipe(
      debounceTime(5000)
    ).subscribe(() => this.successMessage = null);
  }

  crearFormulario() {
    this.form = this.fb.group({
      id: 0,
      nombre: '',
      apellido: '',
      idUniversidad: '',
      nombreUsuario: '',
      contrasenia: '',
      idRolFK: 0
    });
  }

  listarUsuario() {
    let lista = this.usuarioHttp.listaUsuarios();
    lista.snapshotChanges().subscribe(
      resp => {
        this.usuarios = [];
        resp.forEach(item => {
          let usuario = item.payload.toJSON();
          usuario['$key'] = item.key;
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
    if (this.form.value.nombre == "") {
      return this._success.next(`Ingrese nombre.`);
    } else if (this.form.value.apellido == "") {
      return this._success.next(`Ingrese apellido.`);
    } else if (this.form.value.idUniversidad == "") {
      return this._success.next(`Ingrese # de Universidad.`);
    } else if (this.form.value.nombreUsuario == "") {
      return this._success.next(`Ingrese Usuario.`);
    } else if (this.form.value.contrasenia == "") {
      return this._success.next(`Ingrese la contraseña.`);
    } else {
      this.usuarioHttp.agregarUsuario(this.form.value);
      this.changeSuccessMessage();
    }
  }

  public changeSuccessMessage() {
    this._success.next(`Registrado correctamente.`);
    this.crearFormulario();
  }

}
