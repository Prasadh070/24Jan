import { Component, OnInit } from '@angular/core';
import { UploaduserDocuments } from 'src/app/model/uploaduser-documents';
import { CommonServiceService } from 'src/app/service/common-service.service';

@Component({
  selector: 'app-viewuploaddocument',
  templateUrl: './viewuploaddocument.component.html',
  styleUrls: ['./viewuploaddocument.component.css']
})
export class ViewuploaddocumentComponent implements OnInit {
  constructor(private service:CommonServiceService){}
  user:UploaduserDocuments
  viewdata:any
  ngOnInit(): void {

    let userJson=     sessionStorage.getItem('doc2')
  let u:UploaduserDocuments=JSON.parse(userJson);
  console.log(u)

  this.user=u;
    
      
  }
}


