import { Component, OnInit,Input } from '@angular/core';
import {Router} from '@angular/router'
  import { from } from 'rxjs';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() product
  
  constructor(private router:Router) { }

  ngOnInit() {
    console.log('data i found',this.product)
  }
showProduct()
{
var url='/showdata/'+this.product.productid
this.router.navigate([url])
}
}
