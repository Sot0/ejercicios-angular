import { Injectable } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

interface Breadcrumb {
  label: string;
  url: string;
}

@Injectable({
  providedIn: 'root'
})
export class BreadcrumbService {
  migas: Breadcrumb[] = [];
  nivelActual = '';

  constructor(private router: Router, private route: ActivatedRoute) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.migas = this.generarMiga(this.route.root);
    });
  }

  generarMiga(route: ActivatedRoute, url: string = '', migas: Array<Breadcrumb> = []): Breadcrumb[] {
    const routeChildren: ActivatedRoute[] = route.children;

    if (routeChildren.length === 0) {
      return migas;
    }

    for (const child of routeChildren) {
      const childUrl: string = child.snapshot?.url?.map(segment => segment?.path).join('/');
      if (childUrl !== '') {
        url += `/${childUrl}`;
      }

      migas.push({ label: child.snapshot.data['breadcrumb'], url: url });
      if (child.snapshot?.data['level']) {
        this.nivelActual = child.snapshot?.data['level'];
      }
      return this.generarMiga(child, url, migas);
    }
    console.log(migas);
    return migas;
  }
}
