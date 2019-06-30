import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestRoutingModule } from './test-routing.module';
import { View1Component } from './view1/view1.component';

@NgModule({
  declarations: [View1Component],
  exports: [],
  imports: [
    CommonModule,
    TestRoutingModule
  ]
})
export class TestModule { }
