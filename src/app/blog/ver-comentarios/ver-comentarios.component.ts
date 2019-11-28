import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/usuarios/servicios/usuario.service';

@Component({
  selector: 'app-ver-comentarios',
  templateUrl: './ver-comentarios.component.html',
  styleUrls: ['./ver-comentarios.component.css']
})
export class VerComentariosComponent implements OnInit {

  constructor(public tesauroHttp: UsuarioService) { }

  ngOnInit() {
    this.getTesauroJson();
  }

  getTesauroJson() {
    // this.tesauroHttp.getTesauro().subscribe(
    //   respuesta => {
    //     console.log("Impresión del json tesauro", respuesta);
    //   }
    // );
    }
}
