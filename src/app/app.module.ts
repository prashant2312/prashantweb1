import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SlideComponent } from './slide/slide.component';
import { ProductComponent } from './product/product.component';
import { SignupComponent } from './signup/signup.component';
import {HttpClientModule} from '@angular/common/http'
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
 
import { ToastrModule } from 'ngx-toastr';
import { ProComponent } from './pro/pro.component';
import { FindComponent } from './find/find.component';
import { FindallComponent } from './findall/findall.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { ForgetpassComponent } from './forgetpass/forgetpass.component';
import { ForgotComponent } from './forgot/forgot.component';
import { RemoveComponent } from './remove/remove.component';
import { ShowdataComponent } from './showdata/showdata.component';
import { CartComponent } from './cart/cart.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    SlideComponent,
    ProductComponent,
    SignupComponent,
    ProComponent,
    FindComponent,
    FindallComponent,
    HomeComponent,
    AdminComponent,
    ForgetpassComponent,
    ForgotComponent,
    RemoveComponent,
    ShowdataComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot() // ToastrModule added
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
