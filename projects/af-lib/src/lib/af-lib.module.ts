import { NgModule } from '@angular/core';
import {ButtonComponent} from './atoms';

const atomComponents = [
  ButtonComponent
];


@NgModule({
  declarations: [...atomComponents],
  imports: [
  ],
  exports: [...atomComponents]
})
export class AfLibModule { }
