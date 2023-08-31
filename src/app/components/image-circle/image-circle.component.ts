import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-image-circle',
  templateUrl: './image-circle.component.html',
  styleUrls: ['./image-circle.component.scss']
})
export class ImageCircleComponent {
  @Input() imageRoute: string = '';
}
