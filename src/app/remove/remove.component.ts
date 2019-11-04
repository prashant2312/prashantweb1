import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import{ToastrService} from 'ngx-toastr';
import{HttpClient} from '@angular/common/http';
//var apiurl='/api/remove'
var apiurl='https://localhost:1400/api/remove'
@Component({
  selector: 'app-remove',
  templateUrl: './remove.component.html',
  styleUrls: ['./remove.component.css']
})
export class RemoveComponent implements OnInit {
email=''
  constructor(private http:HttpClient,private toastr:ToastrService,private router:Router) { }

  ngOnInit() {
  }
remove(){
  var req={
    email:this.email
    
    
   
  }
  console.log('you entered',req)
  this.http.post(apiurl,req).subscribe((Response)=>{
    
    
   if(Response['code']==1100){
    console.log("user removed")
     this.toastr.success('user removed')
     this.router.navigate(['/'])
     
   }
  if(Response['code']==1234){
    this.toastr.success('send email')
   
   
  
  }
 
  },(error)=>{
    console.log('error in parsing to server')
  })
 }

}

