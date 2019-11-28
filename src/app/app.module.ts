import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AppRoutingModule } from './app-routing.module';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { NgbModule, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
// Servicios
import { UsuarioService } from '../app/usuarios/servicios/usuario.service';
// Usuarios
import { ListarUsuariosComponent } from './usuarios/listarUsuarios/listar-usuarios.component';
import { RegistrarUsuariosComponent } from './usuarios/registrar-usuarios/registrar-usuarios.component';
import { LoginComponent } from './usuarios/login/login.component';
import { LeftMenuComponent } from './Layout/left-menu/left-menu.component';
import { TopBarNavComponent } from './Layout/top-bar-nav/top-bar-nav.component';
import { AgregarComentarioComponent } from './blog/agregar-comentario/agregar-comentario.component';
import { FooterComponent } from './Layout/footer/footer.component';
import { ContenedorComponent } from './Layout/contenedor/contenedor.component';
import { VerComentariosComponent } from './blog/ver-comentarios/ver-comentarios.component';
import { InfoMateriaComponent } from './informacion/info-materia/info-materia.component';
import { AlertasComponent } from './Layout/alertas/alertas.component';
import { InfoIIComponent } from './informacion/info-ii/info-ii.component';
// Blog
// import { HttpClient, HttpHandler, httpM } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { RelacionesySusPropiedadesComponent } from './informacion/relacionesy-sus-propiedades/relacionesy-sus-propiedades.component';
import { Ecuaciones1erOrdenComponent } from './informacion/ecuaciones1er-orden/ecuaciones1er-orden.component';
// import { HttpModule } from '@angular/common/http';
// import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    ListarUsuariosComponent,
    RegistrarUsuariosComponent,
    LoginComponent,
    LeftMenuComponent,
    TopBarNavComponent,
    AgregarComentarioComponent,
    FooterComponent,
    ContenedorComponent,
    VerComentariosComponent,
    InfoMateriaComponent,
    AlertasComponent,
    InfoIIComponent,
    RelacionesySusPropiedadesComponent,
    Ecuaciones1erOrdenComponent,
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    AngularFontAwesomeModule,
    NgbModule.forRoot(),
    HttpClientModule
  ],
  providers: [
    UsuarioService,
    NgbActiveModal,
    LeftMenuComponent,
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
