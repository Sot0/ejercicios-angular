import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_map from 'highcharts/modules/map'; // Importa el módulo de mapas
import * as worldMap from "@highcharts/map-collection/custom/world.geo.json";
import { dataCountriesMap } from '../../lib/data/countries';

HC_map(Highcharts); // Activa el módulo de mapas

@Component({
  selector: 'app-grafica',
  templateUrl: './grafica.component.html',
  styleUrls: ['./grafica.component.scss'],
})
export class GraficaComponent {
  Highcharts: typeof Highcharts = Highcharts;
  chartMap: Highcharts.Options = {
    chart: {
      map: worldMap as any,
      backgroundColor: '#F5F5F5',
    },
    title: {
      text: 'DEMO de Highcharts maps',
      style: {
        fontSize: '30px',
        fontFamily: 'Verdana, sans-serif',
      }
    },
    subtitle: {
      text: `Ejemplo de mapa gratuito.`,
      style: {
        fontSize: '10px',
        fontFamily: 'Verdana, sans-serif',
      }
    },
    mapNavigation: {
      enabled: true,
      buttonOptions: {
        alignTo: 'spacingBox'
      }
    },
    legend: {
      enabled: true,
    },
    colorAxis: {
      min: 0
    },
    series: [{
      type: 'map',
      name: 'Ejemplo de tooltip al hacer hover en el mapa',
      states: {
        hover: {
          color: '#13d8a4'
        }
      },
      allAreas: true,
      data: dataCountriesMap,
    } as Highcharts.SeriesMapOptions]
  };
}
