import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OperationExecutiveRoutingModule } from './operation-executive-routing.module';
import { OperationExecutiveComponent } from './operation-executive/operation-executive.component';


@NgModule({
  declarations: [
    OperationExecutiveComponent
  ],
  imports: [
    CommonModule,
    OperationExecutiveRoutingModule
  ]
})
export class OperationExecutiveModule { }
