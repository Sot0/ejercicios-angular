import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Evaluación angular';

  menu = [
    { link: '/', text: 'Inicio' },
    { link: '/login', text: 'Login' },
    { link: '/bootstrap', text: 'Libros responsivos' },
    { link: '/highcharts', text: 'Highcharts' },
    { link: '/observers', text: 'Observables y promesas' },
  ];
}
