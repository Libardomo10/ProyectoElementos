import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarUsuariosComponent } from '../app/usuarios/listarUsuarios/listar-usuarios.component';
import { RegistrarUsuariosComponent } from '../app/usuarios/registrar-usuarios/registrar-usuarios.component';
import { LoginComponent } from './usuarios/login/login.component';

const routes: Routes = [
  { path: 'ListaUsuarios', component: ListarUsuariosComponent },
  { path: 'Registro', component: RegistrarUsuariosComponent },
  { path: 'Login', component: LoginComponent },
  { path: '', redirectTo: '/Login', pathMatch: 'full' },
];


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
