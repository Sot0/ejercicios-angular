import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BootstrapRoutingModule } from './bootstrap-routing.module';
import { VistaResponsivaComponent } from './vista-responsiva/vista-responsiva.component';
import { ComponentsModule } from '../components/components.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    VistaResponsivaComponent
  ],
  imports: [
    CommonModule,
    BootstrapRoutingModule,
    ComponentsModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class BootstrapModule { }
