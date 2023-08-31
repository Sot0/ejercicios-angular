import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ObservablesPromesasRoutingModule } from './observables-promesas-routing.module';
import { TimerComponent } from './timer/timer.component';



@NgModule({
  declarations: [
    TimerComponent
  ],
  imports: [
    CommonModule,
    ObservablesPromesasRoutingModule
  ]
})
export class ObservablesPromesasModule { }
