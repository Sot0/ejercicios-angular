import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { BienvenidaComponent } from './bienvenida/bienvenida.component';
import { OpcionUnoComponent } from './bienvenida/opciones/opcion-uno/opcion-uno.component';
import { OpcionDosComponent } from './bienvenida/opciones/opcion-dos/opcion-dos.component';
import { OpcionTresComponent } from './bienvenida/opciones/opcion-tres/opcion-tres.component';
import { OpcionCuatroComponent } from './bienvenida/opciones/opcion-cuatro/opcion-cuatro.component';
import { VistaUnoComponent } from './bienvenida/opciones/opcion-uno/vista-uno/vista-uno.component';
import { VistaDosComponent } from './bienvenida/opciones/opcion-uno/vista-dos/vista-dos.component';
import { VistaTresComponent } from './bienvenida/opciones/opcion-uno/vista-tres/vista-tres.component';
import { VistaCuatroComponent } from './bienvenida/opciones/opcion-uno/vista-cuatro/vista-cuatro.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  {
    path: 'bienvenida', component: BienvenidaComponent,
    children: [
      {
        path: 'opcion-1',
        component: OpcionUnoComponent,
        children: [
          { path: 'vista-1', component: VistaUnoComponent },
          { path: 'vista-2', component: VistaDosComponent },
          { path: 'vista-3', component: VistaTresComponent },
          { path: 'vista-4', component: VistaCuatroComponent },
        ],
        // data: { breadcrumb: 'Opción 1', level: 'bienvenida' },
      },
      {
        path: 'opcion-2',
        component: OpcionDosComponent,
        // data: { breadcrumb: 'Opción 2', level: 'bienvenida' },
      },
      {
        path: 'opcion-3',
        component: OpcionTresComponent,
        // data: { breadcrumb: 'Opción 3', level: 'bienvenida' },
      },
      {
        path: 'opcion-4',
        component: OpcionCuatroComponent,
        // data: { breadcrumb: 'Opción 4', level: 'bienvenida' },
      },
      { path: '', pathMatch: 'full', redirectTo: 'bienvenida' }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
