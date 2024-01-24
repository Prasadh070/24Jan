export class Roles {
    public static userroles:Array<any>=[
        //0
        {
            admin:[
                    {label:'View Enquiry',path:'statistics'},
                    {label:'View Registration',path:'add_emp'},
                    // {label:'update Register',path:'view_emp'},
                    {label:'View Defaulters',path:'view_defaulters'}
                 ],
            
              re:[
                //{label:'Add Enquiry',path:'add_enquiry'},
                {label:'View Register data',path:'view_enquiry'},
                {
                    label:'View Document and verification status',path:'document'
                },
                {label:'Upload document',path:'udocument'},
                {
                  label:'Make Payment',path:'pay'
                }


              ]   ,
              operation:[
                {label:'Operation Executive',path:'operation'}
              ]
        }
        
    ]
}
