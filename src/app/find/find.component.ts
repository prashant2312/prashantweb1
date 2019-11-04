import { Component, OnInit } from '@angular/core';
import{HttpClient} from '@angular/common/http'
import{ToastrService} from 'ngx-toastr' 
var apiurl='/api/find'
//var apiurl='http://localhost:3100/api/find'
@Component({
  selector: 'app-find',
  templateUrl: './find.component.html',
  styleUrls: ['./find.component.css']
})
export class FindComponent implements OnInit {
productid=''
  constructor(private http:HttpClient,private toastr:ToastrService) { }

  ngOnInit() {
  }
find(){
  var req={
    productid:this.productid
  }
  console.log('you entered',req)
    this.http.post(apiurl,req).subscribe((Response)=>{
      if(Response['code']==1100){
        console.log('product found')
        this.toastr.success('product found')
      }
      if(Response['code']==1300){
        this.toastr.warning('please enter sufficient data')
      }
      
    },(error)=>{
      this.toastr.error('no response')
    })
}
}
