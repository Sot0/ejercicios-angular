import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  menu = [
    { link: '/login', text: 'Login' },
    { link: '/bootstrap', text: 'Bootstrap' },
    { link: '/libreria', text: 'Libros' },
    { link: '/highcharts', text: 'Highcharts' },
    { link: '/observers', text: 'Observables y promesas' },
  ];
}
