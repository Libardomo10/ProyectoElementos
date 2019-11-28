import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarUsuariosComponent } from '../app/usuarios/listarUsuarios/listar-usuarios.component';
import { RegistrarUsuariosComponent } from '../app/usuarios/registrar-usuarios/registrar-usuarios.component';
import { LoginComponent } from './usuarios/login/login.component';
import { AgregarComentarioComponent } from '../app/blog/agregar-comentario/agregar-comentario.component';
import { InfoMateriaComponent } from './informacion/info-materia/info-materia.component';
import { InfoIIComponent } from './informacion/info-ii/info-ii.component';
import { RelacionesySusPropiedadesComponent } from './informacion/relacionesy-sus-propiedades/relacionesy-sus-propiedades.component';
import { Ecuaciones1erOrdenComponent } from './informacion/ecuaciones1er-orden/ecuaciones1er-orden.component';
import { VerComentariosComponent } from './blog/ver-comentarios/ver-comentarios.component';

const routes: Routes = [
  { path: 'ListaUsuarios', component: ListarUsuariosComponent },
  { path: 'Registro', component: RegistrarUsuariosComponent },
  { path: 'blog/Comentario', component: AgregarComentarioComponent },
  { path: 'blog/ver-comentario', component: VerComentariosComponent },
  { path: 'Login', component: LoginComponent },
  { path: "Inicio", component: InfoMateriaComponent },
  { path: "infoII", component: InfoIIComponent },
  { path: "ecuacionesRecurrencia", component: RelacionesySusPropiedadesComponent }, // Lo cambie por ecuaciones de recurrencia.
  { path: "ecuaciones1erOrden", component: Ecuaciones1erOrdenComponent },
  { path: "Comentarios", component: VerComentariosComponent},
  { path: '', redirectTo: '/Inicio', pathMatch: 'full' },
];


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
