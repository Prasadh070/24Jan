import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { CommonServiceService } from 'src/app/service/common-service.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  step:any=1;
  userReg: FormGroup;
//   employementdetails:FormGroup;
//   insuranceplandetails:FormGroup;
//   healthinformation:FormGroup;
//   dependentinformation:FormGroup;
//  additionalinformation:FormGroup;


  constructor(private fb:FormBuilder,private router:Router , private s :CommonServiceService, private activeRout:ActivatedRoute) { }
ngOnInit(): void {

   this.userReg=this.fb.group({
              id:[0],
          username: [],
          setpassword:[],
            fullname:[],
            gender:[],
            dateofbirth:[],
            contactno:[],
            address:[],
            pincode:[] ,
            emailaddress:[],
            
         ed:this.fb.group({
          employementstatus:[],
          occupation:[],
          workingAddress:[] ,
        })  ,
          hi:this.fb.group({
            primarycarePhysician:[],
            preExistingmedicalCondition:[],
            currentMedication:[]
       
      })  ,
         
      depedentinfomation:this.fb.group({
            nameofDependent:[],
            reletionwithdependent:[],
            birthdate:[],
            age:[],
          })  ,
            ipd:this.fb.group({
            coverageType:[],
            coverageStartdate:[],   
          })  
             ,
  
          
      
           addi:this.fb.group({
           preferedmethodforcommunication:this.fb.control(""),
           howhereabout:this.fb.control("")                  
           })            
          }) 
          // this.patchEditvalue() 
          
}
     
          onSubmit() {

            // if(this.userReg.controls['id'].value==0)
            // {

          //  this.step=this.step+1;
            // if(this.step==8){
            //   // this.router.navigate([\thankyou] );
            // }
       //         console.log(this.userReg.value)
                this.s.saveRegistration(this.userReg.value).subscribe();
                console.log(this.userReg.value)
                // window.location.reload();

              //  alert("User Registered Successfully...!")
            // }
            // else
            // {
            //   this.s.updateRegister(this.userReg.value).subscribe();
            //   alert("update Register")
            // }
            this.userReg.reset();

          }
           previous() {
          this.step=this.step-1;
          }
          next() {
            
            this.step=this.step+1;
          }

          patchEditvalue(){

            this.activeRout.paramMap.subscribe(
              
              param=>{

                let userjson:string=param.get('data')
                let editDetails:User=JSON.parse(userjson);
                console.log(editDetails);
                this.userReg.patchValue(editDetails)
              }
            )
          }


}
