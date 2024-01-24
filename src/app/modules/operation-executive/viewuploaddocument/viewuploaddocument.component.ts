import { Component, OnInit } from '@angular/core';
import { UploaduserDocuments } from 'src/app/model/uploaduser-documents';
import { User } from 'src/app/model/user(1)';
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

    // this.service.getdocbyid().subscribe(doc=>{
    //   this.viewdata=doc;
   // })
   let userJson=     sessionStorage.getItem('doc1')
   console.log(userJson);
   
   let u:UploaduserDocuments=JSON.parse(userJson);
    console.log(u);
    
      this.user=u
  }
  verifydocument(us:UploaduserDocuments)
  {
    this.service.verifydoc(us).subscribe();
  }

}


