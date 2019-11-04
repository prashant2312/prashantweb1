import { Component, OnInit } from '@angular/core';
import{HttpClient} from '@angular/common/http'
import{ToastrService} from 'ngx-toastr' 
var apiurl='/api/addproduct'
//var apiurl='http://localhost:3100/api/addproduct'
@Component({
  selector: 'app-pro',
  templateUrl: './pro.component.html',
  styleUrls: ['./pro.component.css']
})
export class ProComponent implements OnInit {
productname=''
productrate=''
productsno=''
productmod=''
productimg=''
productseller=''
productrating=''
  constructor(private http:HttpClient,private toastr:ToastrService){} 
  ngOnInit() {

  }
   pro(){
    var request={
      productrate:this.productrate,
      productname:this.productname,
      productsno:this.productsno,
      productmod:this.productmod,
      productimg:this.productimg,
      productseller:this.productseller,
      productrating:this.productrating
    }
    console.log('you entered',request)
    this.http.post(apiurl,request).subscribe((Response)=>{
      console.log("product placed")
      if(Response['code']==1200)
      {
        this.toastr.warning('dublicate entry')
      }
      if(Response['code']==1400)
      {
        this.toastr.success('product entered')
      }
    },(error)=>{
      this.toastr.error('product didnot placed')
    })
    }
  }
  



  