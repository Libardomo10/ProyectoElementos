import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../servicios/usuario.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private _error = new Subject<string>();

  staticAlertClosed = false;
  mensajeError: string;

  OcultarComponentes: boolean = false;

  form: FormGroup;
  usuarios: any[];
  sesionUser: any[];

  constructor(private usuarioHttp: UsuarioService,
    private fb: FormBuilder,
    public activeModal: NgbActiveModal,
    private modalService: NgbModal
  ) { this.dataSesion(); }

  ngOnInit() {
    this.listarUsuario();
    this.dataSesion();
    setTimeout(() => this.staticAlertClosed = true, 20000);

    this._error.subscribe(message => this.mensajeError = message);
    this._error.pipe(
      debounceTime(5000)
    ).subscribe(() => this.mensajeError = null);
  }

  public changeSuccessMessage() {
    this._error.next(`Usuario y/o contraseña invalidos.`);
  }

  dataSesion() {
    this.form = this.fb.group({
      nombreUsuario: '',
      contrasenia: ''
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

  sesionUsuario() {
    for (let i = 0; i < this.usuarios.length; i++) {
      if (this.usuarios[i].nombreUsuario === this.form.value.nombreUsuario) {
        if (this.usuarios[i].contrasenia === this.form.value.contrasenia) {
          this.sesionUser = this.usuarios[i];
          console.log(this.sesionUser, 'lololololo');
          const modalRef = this.activeModal.close();
          this.OcultarComponentes = false;
          location.reload();
        }
      } else {
        this.changeSuccessMessage();
        console.log('Usuario y/o contraseña incorrectos.');
      }
    }
    this.guardarSesion();
  }

  obtenerSesion() {
    let sesion = JSON.parse(sessionStorage.getItem('Sesion'));
    console.log('Session......', sesion);
  }

  guardarSesion() {
    sessionStorage.setItem('Sesion', JSON.stringify(this.sesionUser));
  }
}
