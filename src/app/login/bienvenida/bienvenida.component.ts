import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BreadcrumbService } from '../../services/breadcrumb.service';

interface Opcion {
  link: string;
  text: string;
}

@Component({
  selector: 'app-bienvenida',
  templateUrl: './bienvenida.component.html',
  styleUrls: ['./bienvenida.component.scss']
})
export class BienvenidaComponent implements OnInit{
  opciones: Opcion[] = [
    { link: 'opcion-1', text: 'Opción 1' },
    { link: 'opcion-2', text: 'Opción 2' },
    { link: 'opcion-3', text: 'Opción 3' },
    { link: 'opcion-4', text: 'Opción 4' },
  ];
  opcionSeleccionada?: string;

  constructor(
    private router: Router,
    public breadcrumbService: BreadcrumbService,
  ) {
  }

  ngOnInit() {
    // Nivel actual para las migas
    // this.breadcrumbService.nivelActual = 'bienvenida';
  }

  navigate(): void {
    this.router.navigate([`/login/bienvenida/${this.opcionSeleccionada}`]);
  }

  regresar(): void {
    // const migaAnterior = this.breadcrumbService.migas[this.breadcrumbService.migas.length - 2];
    // if (migaAnterior) {
    //   this.router.navigateByUrl(migaAnterior.url);
    // }
  }
}
