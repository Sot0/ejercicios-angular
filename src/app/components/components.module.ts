import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageCircleComponent } from './image-circle/image-circle.component';
import { CardBookComponent } from './card-book/card-book.component';



@NgModule({
  declarations: [
    ImageCircleComponent,
    CardBookComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ImageCircleComponent,
    CardBookComponent,
  ]
})
export class ComponentsModule { }
