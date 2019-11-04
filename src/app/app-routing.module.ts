import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {SignupComponent}from './signup/signup.component';
import {ProComponent} from './pro/pro.component';
import {FindComponent} from './find/find.component';

import {HomeComponent} from './home/home.component';
import {AdminComponent} from './admin/admin.component';
import {ForgotComponent} from './forgot/forgot.component';
import {RemoveComponent} from './remove/remove.component';
import {ShowdataComponent} from './showdata/showdata.component'
import {CartComponent} from './cart/cart.component'

const routes: Routes = [
  {
    path:'',component:HomeComponent
  },
  {
   path:'login',component:LoginComponent
  },
  {
    path:'signup',component:SignupComponent
  },
  {
    path:'pro',component:ProComponent
  },
  {
    path:'find',component:FindComponent
  },
  {
    path:'admin',component:AdminComponent
  },
  {
    path:'forgot',component:ForgotComponent
  },{
    path:'remove',component:RemoveComponent
  },
  {
    path:'showdata/:productid',component:ShowdataComponent
  },
  {
    path:'cart',component:CartComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
