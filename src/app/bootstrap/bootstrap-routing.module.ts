import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VistaResponsivaComponent } from './vista-responsiva/vista-responsiva.component';

const routes: Routes = [
  { path: '', component: VistaResponsivaComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BootstrapRoutingModule { }
