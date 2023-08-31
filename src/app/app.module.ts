import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';
import { BootstrapModule } from './bootstrap/bootstrap.module';
import { HighchartsModule } from './highcharts/highcharts.module';
import { LoginModule } from './login/login.module';
import { ObservablesPromesasModule } from './observables-promesas/observables-promesas.module';
import { ViewsGenericModule } from './views-generic/views-generic.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BootstrapModule,
    HighchartsModule,
    LoginModule,
    ObservablesPromesasModule,
    ViewsGenericModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
