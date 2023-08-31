import { Component, OnDestroy } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { takeWhile } from 'rxjs/operators';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnDestroy {
  timerObservable: Subscription;
  isActive = true;
  intervalSeconds = 300000;
  delayPromise = 2000;
  totalUpdates = 0;

  constructor() {
    this.timerObservable = interval(this.intervalSeconds)
      .pipe(takeWhile(() => this.isActive))
      .subscribe(() => {
        this.actualizarApp();
      });
  }

  ngOnDestroy() {
    this.isActive = false;
    this.timerObservable.unsubscribe();
  }

  actualizarApp(): void {
    this.totalUpdates += 1;
  }

  sendPromise(): void {
    const promise = new Promise<void>((resolve) => {
      setTimeout(() => {
        alert('¡Alerta desde la promesa!');
        resolve();
      }, this.delayPromise);
    });

    promise.then(() => {
      console.log('Promesa exitosa');
    }).catch(() => {
      console.log('Promesa fallida');
    });
  }

}
