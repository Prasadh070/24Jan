import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEnquiryComponent } from './add-enquiry/add-enquiry.component';
import { ViewEnquiryComponent } from './view-enquiry/view-enquiry.component';
import { ViewuploaddocumentComponent } from './viewuploaddocument/viewuploaddocument.component';
import { UploadDocumentComponent } from './upload-document/upload-document.component';
import { MakepaymentComponent } from './makepayment/makepayment.component';
//import { UploadDocumentComponent } from './upload-document/upload-document.component';

const routes: Routes = [

  {path:'add_enquiry' , component:AddEnquiryComponent},
  {path:'view_enquiry' , component:ViewEnquiryComponent},
  {path:'document',component:ViewuploaddocumentComponent},
  {path:'udocument',component:UploadDocumentComponent},
  {path:'pay',component:MakepaymentComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReRoutingModule { }
