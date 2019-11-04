import { Component, OnInit } from '@angular/core';
import{HttpClient} from '@angular/common/http'
import{ToastrService} from 'ngx-toastr' 
//var apiurl='/api/findall'
var apiurl='http://localhost:3100/api/findall'
@Component({
  selector: 'app-findall',
  templateUrl: './findall.component.html',
  styleUrls: ['./findall.component.css']
})
export class FindallComponent implements OnInit {

  constructor(private http:HttpClient,private toastr:ToastrService) { }

  ngOnInit() {
  }
findall(){
  this.http.get(apiurl).subscribe((Response)=>{
    this.toastr.success('request is sent')
    console.log(" found",Response)
    
  },(error)=>{
    this.toastr.error('did not found')
  })
}
}
