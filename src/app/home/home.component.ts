import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
//var apiurl='http://localhost:3100/api/findall'
var apiurl='/api/findall'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
products=[]
  constructor(private http:HttpClient){
    this.http.get(apiurl).subscribe((Response)=>{
  console.log("response from api",Response)
  this.products=Response['details']
    },
    (error)=>
    {
      console.log('error in connection')
    }
    )
  }

  ngOnInit() {
  }

}
