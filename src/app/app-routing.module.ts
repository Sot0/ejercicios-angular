import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './views-generic/not-found/not-found.component';
import { HomeComponent } from './views-generic/home/home.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
  { path: 'bootstrap', loadChildren: () => import('./bootstrap/bootstrap.module').then(m => m.BootstrapModule) },
  { path: 'highcharts', loadChildren: () => import('./highcharts/highcharts.module').then(m => m.HighchartsModule) },
  { path: 'observers', loadChildren: () => import('./observables-promesas/observables-promesas.module').then(m => m.ObservablesPromesasModule) },
  { path: 'not-found', component: NotFoundComponent },
  { path: '**', redirectTo: '/not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
