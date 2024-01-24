import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UploaduserDocuments } from 'src/app/model/uploaduser-documents';
import { User } from 'src/app/model/user';
import { CommonServiceService } from 'src/app/service/common-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  implements OnInit{

  constructor(private fb:FormBuilder,private router:Router, private  service:CommonServiceService){}

  loginForm:FormGroup;
  u:User[];
  newUser:User;
  udocument:UploaduserDocuments[]

  ngOnInit(): void {
    this.loginForm=this.fb.group({
      username:[],
      setpassword:[]
    })

    this.service.getAll().subscribe((uu:User[])=>{
      console.log(uu)
      this.u = uu;
      console.log(this.u)
    })

   
  }
  
  onLogin()
  {
    let un:string=this.loginForm.controls['username'].value;
    let ps:string=this.loginForm.controls['setpassword'].value;
    // this.u.forEach(uuu=>{
    // console.log(uuu);
    
    //   if(uuu.username==un && uuu.setpassword==ps)
    //   {
        
       
    //     this.newUser=uuu
        
    //     sessionStorage.setItem("user",JSON.stringify(uuu));
    //   }
       
    //   else
    //   {
    //     console.log('Not Found......');
    //   }
    //  }
    

     
    
    // )
  
 
  
    if(un=='admin123' && ps=='admin@123')
    {
          sessionStorage.setItem('role','admin')

          this.router.navigateByUrl('/apnafinance/admin')
          // this.router.navigateByUrl('/apnafinance/admin');   
    }
    else if(un=='op123' && ps=='op@123')
    {
      sessionStorage.setItem('role','operation')

      this.router.navigateByUrl('/apnafinance/operation');
    }
    
    else if(this.newUser.username==un && this.newUser.setpassword==ps)
    {
      console.log(this.newUser.username);
      console.log(this.newUser.setpassword)
       sessionStorage.setItem('role','re')
      this.router.navigateByUrl('/apnafinance/re'); 
    }

    else if(un=='re123' && ps=='re@123')
    {  
          sessionStorage.setItem('role','re')

          this.router.navigateByUrl('/apnafinance/re');   
    }
    else{
      alert('Enter valid username or password..!')
    }
  }
}
