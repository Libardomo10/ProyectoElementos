import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../servicios/usuario.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  usuarios: any[];
  sesionUser: any[];

  constructor(private usuarioHttp: UsuarioService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.listarUsuario();
    this.dataSesion();
  }

  dataSesion() {
    this.form = this.fb.group({
      nombreUsuario: '',
      contrasenia: ''
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

  sesionUsuario() { debugger
    for (let i = 0; i < this.usuarios.length; i++) {
      if (this.usuarios[i].nombreUsuario === this.form.value.nombreUsuario) {
        if (this.usuarios[i].contrasenia === this.form.value.contrasenia) {
          debugger
          this.sesionUser = this.usuarios[i];
          console.log(this.sesionUser, 'lololololo');
        }
      } else {
        console.log('Usuario y/o contraseña incorrectos.');
      }
    }
  }

}
