import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighchartsRoutingModule } from './highcharts-routing.module';
import { GraficaComponent } from './grafica/grafica.component';



@NgModule({
  declarations: [
    GraficaComponent
  ],
  imports: [
    CommonModule,
    HighchartsRoutingModule
  ]
})
export class HighchartsModule { }
