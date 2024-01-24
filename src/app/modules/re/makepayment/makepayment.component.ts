import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CommonServiceService } from 'src/app/service/common-service.service';

@Component({
  selector: 'app-makepayment',
  templateUrl: './makepayment.component.html',
  styleUrls: ['./makepayment.component.css']
})
export class MakepaymentComponent  implements OnInit{
  constructor(private fb:FormBuilder,private service:CommonServiceService){}

  payform:FormGroup
ngOnInit(): void {
    this.payform=this.fb.group(
      {
        id:[],
        methodofPayment:[],
        amount:[],
        cardno:[],
        dateofpayment:[]
      }
    )
}

makepayment()
{
  console.log(this.payform.value);
  this.service.makepayment(this.payform.value).subscribe();
  
}

}
