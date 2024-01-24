import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EnquiryForm } from '../model/enquiry-form';
import { User } from '../model/user';
import { Additionalinformation } from '../model/additionalinformation';
import { Dependentinformation } from '../model/dependentinformation';
import { Employementdetails } from '../model/employementdetails';
import { Healthinformation } from '../model/healthinformation';
import { Insuranceplandetails } from '../model/insuranceplandetails';
import { Premimumcalculation } from '../model/premimumcalculation';
import { UploaduserDocuments } from '../model/uploaduser-documents';
import { Payment } from '../model/payment';

@Injectable({
  providedIn: 'root'
})
export class CommonServiceService {

  constructor(private http:HttpClient) { }


// user:User={
//   id: 0,
//   username: '',
//   setpassword: '',
//   fullname: '',
//   gender: '',
//   dateofbirth: undefined,
//   contactno: 0,
//   address: '',
//   pincode: 0,
//   ed: new Employementdetails,
//   hi: new Healthinformation,
//   depedentinfomation: new Dependentinformation,
//   ipd: new Insuranceplandetails,
//   addi: new Additionalinformation
// }


    

  saveData(enquiry: EnquiryForm)
  {

    return this.http.post('http://localhost:8767/health/saveE',enquiry)

  }

  saveRegistration(user:User)
{
  return this.http.post('http://localhost:8767/health/saveUserdata',user)
}

 getEnquiry()
 {
  return this.http.get('http://localhost:8767/health/getEdata')
 }

 getUser()
 {
  return this.http.get('http://localhost:8767/health/getuserdata')
 }

 deleteRegister(user : User)
 {
  return this.http.delete('http://localhost:8767/health/deleteuser/'+user.id);
 }


 updateRegister(user:User)
 {
  return this.http.put('http://localhost:8767/health/update/'+user.id,user);
 }

 deleteEnquiry(enquiry : EnquiryForm)
 {
  return this.http.delete('http://localhost:8767/health/deleteEnqiry/'+enquiry.e_id);
 }

 getdatabyusernameandpassword(user:User)
{
  return this.http.get('http://localhost:8767/health/getuserdata/'+user.username+'/'+user.setpassword)
}

getAll(){
  return this.http.get('http://localhost:8767/health/getuserdata')
}
getuserbyid(user:User)
{
  return this.http.get('http://localhost:8767/health/getuserdata/'+user.id)
}

getdocument()
{
  return this.http.get('http://localhost:8767/alldocument');
}


savedocument(up:any)
{
  return this.http.post('http://localhost:8767/ud',up)
}
getdocbyid(user:User)
{
  return this.http.get('http://localhost:8767/get/'+user.id);
}
verifydoc(us:UploaduserDocuments)
{
  return this.http.get('http://localhost:8767/verify/'+us.id)
}
makepayment( pay:Payment)
{
  return this.http.post('http://localhost:8767/savepayment',pay)

}
getpay(us:User)
{
  return this.http.get('http://localhost:8767/getpay/'+us.id)
}
}
