import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import{ToastrService} from 'ngx-toastr';
import{HttpClient} from '@angular/common/http';
var apiurl='/api/forgetpass'
//var apiurl='https://localhost:1400/api/forgetpass'
@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.css']
})
export class ForgotComponent implements OnInit {
email=''
  constructor(private http:HttpClient,private toastr:ToastrService,private router:Router) { }
  
  ngOnInit() {
  }
forgot(){
  var req={
    email:this.email
  }
  this.http.post(apiurl,req).subscribe((Response)=>{
    console.log("request submitted")
    
   if(Response['code']==1400){
     this.toastr.success('password send')
     this.router.navigate(['/login'])
     
   }
  if(Response['code']==1500){
    this.toastr.warning('give emailaddres')
   
   
  
  }
  if(Response['code']==1300)
   this.toastr.warning('user not found')
   
   
 }
   
  },(error)=>{
    console.log('error in parsing to server')
  })
 }
}

