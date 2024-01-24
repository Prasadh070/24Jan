import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UploaduserDocuments } from 'src/app/model/uploaduser-documents';
import { User } from 'src/app/model/user';
import { CommonServiceService } from 'src/app/service/common-service.service';

@Component({
  selector: 'app-operation-executive',
  templateUrl: './operation-executive.component.html',
  styleUrls: ['./operation-executive.component.css']
})
export class OperationExecutiveComponent implements OnInit {

  constructor(private s:CommonServiceService , private router:Router){}



  user:User[];
document:UploaduserDocuments
  
 ngOnInit(): void {

   this.s.getUser().subscribe((ur:User[])=>{

    this.user=ur;
 
    console.log(this.user);
    
   })
  }

  
  editData(userr:User) {

 
    
    let userjson:string=JSON.stringify(userr);
    console.log(userjson)
         this.router.navigate(['apnafinance/admin/view_emp',userjson])

    }
    


  delete(us:User) {

    this.s.deleteRegister(us).subscribe();
    window.location.reload()

    
    }

    viewdocument(us:User)
    {
      this.s.getdocbyid(us).subscribe(doc=>{
        console.log(doc);
        sessionStorage.setItem("doc1",JSON.stringify(doc))
      

      })
      

        this.router.navigate(['apnafinance/operation/doc',us])
    }

    viewpaymentdetails(us:User)
    {
      this.s.getpay(us).subscribe(pay=>{
        console.log(pay);
        sessionStorage.setItem("pay1",JSON.stringify(pay))
       // console.log(pay);
        
      })
    
      

      this.router.navigate(['apnafinance/operation/pay',us])
      
    }
}
