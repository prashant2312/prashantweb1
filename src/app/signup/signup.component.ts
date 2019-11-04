import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import{ToastrService} from 'ngx-toastr';
import{HttpClient} from '@angular/common/http';
var apiurl='/api/signup'
//var apiurl='http://localhost:3100/api/signup'
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
name=''
email=''
password=''

  constructor(private http:HttpClient,private toastr:ToastrService,private router:Router) { }

  ngOnInit() {
  }
signup(){
 var request={
   name:this.name,
   email:this.email,
   password:this.password,
   
  
 }
 console.log('you entered',request)
 this.http.post(apiurl,request).subscribe((Response)=>{
   console.log("sign up done")
   
  if(Response['code']==2500){
    this.toastr.success('signup done')
    this.router.navigate(['/login'])
    
  }
 if(Response['code']==4400){
   this.toastr.success('account exist')
  this.router.navigate(['/login'])
  
 
 }
 if(Response['code']==1800){
  this.toastr.warning('dublicate email')
  
  
}
  
 },(error)=>{
   console.log('error in parsing to server')
 })
}
}
