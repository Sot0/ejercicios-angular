import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighchartsRoutingModule } from './highcharts-routing.module';
import { GraficaComponent } from './grafica/grafica.component';
import { HighchartsChartModule } from 'highcharts-angular';

@NgModule({
  declarations: [
    GraficaComponent
  ],
  imports: [
    CommonModule,
    HighchartsRoutingModule,
    HighchartsChartModule,
  ]
})
export class HighchartsModule { }
