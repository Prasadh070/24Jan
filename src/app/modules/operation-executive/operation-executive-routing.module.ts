import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OperationExecutiveComponent } from './operation-executive/operation-executive.component';
import { ViewuploaddocumentComponent } from './viewuploaddocument/viewuploaddocument.component';
import { ViewpaymentdetailsComponent } from './viewpaymentdetails/viewpaymentdetails.component';

const routes: Routes = [
  {path:'operation',component:OperationExecutiveComponent},
  {path:'doc',component:ViewuploaddocumentComponent},
  {path:'pay',component:ViewpaymentdetailsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OperationExecutiveRoutingModule { }
