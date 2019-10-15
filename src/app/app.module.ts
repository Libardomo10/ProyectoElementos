import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AppRoutingModule } from './app-routing.module';
// Servicios
import { UsuarioService } from '../app/usuarios/servicios/usuario.service';
// Usuarios
import { ListarUsuariosComponent } from './usuarios/listarUsuarios/listar-usuarios.component';
import { RegistrarUsuariosComponent } from './usuarios/registrar-usuarios/registrar-usuarios.component';
import { LoginComponent } from './usuarios/login/login.component';
// Blog

@NgModule({
  declarations: [
    AppComponent,
    ListarUsuariosComponent,
    RegistrarUsuariosComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [
    UsuarioService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
