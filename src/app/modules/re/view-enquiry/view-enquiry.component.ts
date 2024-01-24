import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { CommonServiceService } from 'src/app/service/common-service.service';

@Component({
  selector: 'app-view-enquiry',
  templateUrl: './view-enquiry.component.html',
  styleUrls: ['./view-enquiry.component.css']
})
export class ViewEnquiryComponent implements OnInit {

user:User;

  constructor(private fb:FormBuilder,private cs:CommonServiceService,private router:Router){}
  ngOnInit(): void {
  let userJson=     sessionStorage.getItem('user')
  let u:User=JSON.parse(userJson);
  console.log(u)

  this.user=u;
  }


  viewdocument(us:User)
    {
      this.cs.getdocbyid(us).subscribe(doc=>{
        console.log(doc);
        sessionStorage.setItem("doc2",JSON.stringify(doc))
      

      })
      

        this.router.navigate(['apnafinance/re/document',us])
    }
}
