import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
logged=false
  constructor() {
    if(localStorage.email){
      this.logged=true
    }
  }
  ngDoCheck(){
    if(localStorage.email){
      this.logged=true
  }
  }
  ngOnInit() {
  }
logout(){
  this.logged=false
  localStorage.clear()
 
}
}
