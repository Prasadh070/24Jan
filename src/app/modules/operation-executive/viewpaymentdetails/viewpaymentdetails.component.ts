import { Component, OnInit } from '@angular/core';
import { Payment } from 'src/app/model/payment';

@Component({
  selector: 'app-viewpaymentdetails',
  templateUrl: './viewpaymentdetails.component.html',
  styleUrls: ['./viewpaymentdetails.component.css']
})
export class ViewpaymentdetailsComponent implements OnInit {
constructor(){}
pay2:Payment
  ngOnInit(): void {
    let userJson= sessionStorage.getItem('pay1')
    console.log(userJson);
    
    let u:Payment=JSON.parse(userJson);
     console.log(u);
     
       this.pay2=u
  }

}
