import { Component, OnInit } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import{ToastrService} from 'ngx-toastr';
import {Router} from '@angular/router';
const apiurl='/api/login';
//const apiurl='http://localhost:3100/api/login'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 email=''
 password=''
  constructor(private http:HttpClient,private toastr:ToastrService,private router:Router) { }

  ngOnInit() {
  }
login()
{
var request={
  email:this.email,
  password:this.password
}

console.log('you entered',request)
this.http.post(apiurl,request).subscribe((Response)=>{
  this.toastr.success('response came')
  console.log("response from login api",Response)

  if(Response['code']==200){
    this.router.navigate(['/'])
    localStorage.name=Response['name']
    localStorage.email=Response['email']
    this.toastr.success('email:'+this.email)
this.toastr.success('password:'+this.password)
  }
  if(Response['code']==9900)
  {
    this.toastr.warning('enter  sufficient details')
  }
  if(Response['code']==500)
  {
    this.toastr.warning('invalid details')
  }
},(error)=>{
  console.log('error in parsing to server')
})
}
}
