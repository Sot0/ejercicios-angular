import { Component, OnInit } from '@angular/core';
// import { BreadcrumbService } from '../../../../services/breadcrumb.service';

@Component({
  selector: 'app-opcion-tres',
  templateUrl: './opcion-tres.component.html',
  styleUrls: ['./opcion-tres.component.scss']
})
export class OpcionTresComponent implements OnInit {

  constructor(
    // private breadcrumbService: BreadcrumbService
  ) {
    // Nivel actual para las migas
    // this.breadcrumbService.nivelActual = 'opcion-3';
  }

  ngOnInit() {
  }
}
