import { Component, OnInit } from '@angular/core';
// import { BreadcrumbService } from '../../../../services/breadcrumb.service';

@Component({
  selector: 'app-opcion-dos',
  templateUrl: './opcion-dos.component.html',
  styleUrls: ['./opcion-dos.component.scss']
})
export class OpcionDosComponent implements OnInit {

  constructor(
    // private breadcrumbService: BreadcrumbService
  ) {
    // Nivel actual para las migas
    // this.breadcrumbService.nivelActual = 'opcion-2';
  }

  ngOnInit() {
  }
}
