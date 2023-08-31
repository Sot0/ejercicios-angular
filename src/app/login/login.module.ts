import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { ComponentsModule } from '../components/components.module';
import { LoginRoutingModule } from './login-routing.module';

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

@NgModule({
  declarations: [
    LoginComponent,
    BienvenidaComponent,
    OpcionUnoComponent,
    OpcionDosComponent,
    OpcionTresComponent,
    OpcionCuatroComponent,
    VistaUnoComponent,
    VistaDosComponent,
    VistaTresComponent,
    VistaCuatroComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    LoginRoutingModule,
    FormsModule,
    ComponentsModule,
  ]
})
export class LoginModule { }
