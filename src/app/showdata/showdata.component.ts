import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from "@angular/router"
import {HttpClient} from "@angular/common/http"
import {ToastrService} from 'ngx-toastr' 
var addtocartapi='api/addtocart'
//var addtocartapi='http://localhost:3100/api/addtocart'
@Component({
  selector: 'app-showdata',
  templateUrl: './showdata.component.html',
  styleUrls: ['./showdata.component.css']
})
export class ShowdataComponent implements OnInit {

  product = {}
  constructor(private http: HttpClient , private activatedroute : ActivatedRoute ,private toastr:ToastrService,private router:Router) {
    console.log("current route ki details" , this.activatedroute.snapshot)
    var productid = this.activatedroute.snapshot.params.productid;
var apiurl = "/api/find/"+ productid
//var apiurl = "http://localhost:3100/api/find/"+ productid

    this.http.get(apiurl).subscribe((response)=>{
      console.log("response from get product api", response)
      this.product = response['data']
    },
  (error)=>{
      console.log("error in getting product detail" , error)
  })
   }

  ngOnInit() {
  }
addtocart(){
  if(localStorage.email){
   var reqobj={
     email:localStorage.email,
     productimg:this.product['productimg'],
     productname:this.product['productname'],
     productrate:this.product['productrate'],
     productid:this.product['productid']

   }
   this.http.post(addtocartapi,reqobj).subscribe((Response)=>{
   if(Response['code']==1290){
     this.toastr.success('product added to cart')
   }
   },(error)=>{
     this.toastr.warning('error in adding to cart')
   })

  }
  else{
    this.router.navigate(['/login'])
  }
}
buynow(){
  if(localStorage.email){
    this.addtocart()
    this.router.navigate(['/cart'])
  }
  else{
    this.router.navigate(['/login'])
  }
}
}