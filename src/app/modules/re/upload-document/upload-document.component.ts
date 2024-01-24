import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CommonServiceService } from 'src/app/service/common-service.service';


@Component({
  selector: 'app-upload-document',
  templateUrl: './upload-document.component.html',
  styleUrls: ['./upload-document.component.css']
})
export class UploadDocumentComponent implements OnInit {

    constructor(private fb:FormBuilder, private cs:CommonServiceService){}

    docFrom:FormGroup;
  selectphoto:any;
  selectpancard:any;
  selectaadharcard;
  imagePhoto:any;
  imagepancard:any;
  imageaadharcard:any;
  data:any;



    render=new FileReader();

  ngOnInit(): void {
    this.docFrom=this.fb.group({
      id:[],
     
    })
  }

  onselectphoto(event:any){
    console.log(event);
    this.selectphoto=event.target.files[0];

  this.render.onload=e=>this.imagePhoto=this.render.result;
  this.render.readAsDataURL(this.selectphoto);
  }

  onselectpancard(event:any){
    console.log(event)
    this.selectpancard=event.target.files[0]
    this.render.onload=e=>this.imagepancard=this.render.result;
  this.render.readAsDataURL(this.selectpancard);
  }
  onselectaadharcard(event:any){
    console.log(event)
    this.selectaadharcard=event.target.files[0]
    this.render.onload=e=>this.imageaadharcard=this.render.result;
  this.render.readAsDataURL(this.selectaadharcard);
  }

  saveDoc(){
    var jsondata=JSON.stringify(this.docFrom.value)
               var fdata=  new FormData();
               fdata.append("photo",this.selectphoto)
               fdata.append("panCard",this.selectpancard)
               fdata.append("adharCard",this.selectaadharcard)
               fdata.append("id",jsondata)

               this.cs.savedocument(fdata).subscribe();
               alert("upload successfully..")
  }



}
