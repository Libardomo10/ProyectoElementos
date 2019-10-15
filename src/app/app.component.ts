import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../app/usuarios/servicios/usuario.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  // title = 'ProyectoElementos';
  public

  constructor(private usuarioHttp: UsuarioService){

  }

  ngOnInit(){
    
  }
}
