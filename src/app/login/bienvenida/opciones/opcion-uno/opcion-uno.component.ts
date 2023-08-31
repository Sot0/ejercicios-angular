import { Component, OnInit, DoCheck } from '@angular/core';
import { Router } from '@angular/router';
// import { BreadcrumbService } from '../../../../services/breadcrumb.service';

interface Vista {
  link: string;
  text: string;
}

@Component({
  selector: 'app-opcion-uno',
  templateUrl: './opcion-uno.component.html',
  styleUrls: ['./opcion-uno.component.scss']
})
export class OpcionUnoComponent implements DoCheck {
  vistas: Vista[] = [
    { link: 'vista-1', text: 'Vista 1' },
    { link: 'vista-2', text: 'Vista 2' },
    { link: 'vista-3', text: 'Vista 3' },
    { link: 'vista-4', text: 'Vista 4' },
  ];
  vistaSeleccionada?: string;

  constructor(
    private router: Router,
    // private breadcrumbService: BreadcrumbService
  ) {
  }

  ngDoCheck() {
    // Nivel actual para las migas
    // this.breadcrumbService.nivelActual = 'opcion-1';
  }

  navigate(): void {
    this.router.navigate([`/login/bienvenida/opcion-1/${this.vistaSeleccionada}`]);
  }
}
