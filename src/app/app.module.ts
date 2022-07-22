import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NaviComponent } from './components/navi/navi.component';
import { CarComponent } from './components/car/car.component';
import { ColorComponent } from './components/color/color.component';
import { BrandComponent } from './components/brand/brand.component';
import { CarDetailComponent } from './components/car-detail/car-detail.component';
import { FilterPipePipe } from './pipe/filter-pipe.pipe';

import{ToastrModule} from 'ngx-toastr';
import { PaymentComponent } from './components/payment/payment.component';
import { LoginComponent } from './components/login/login.component';

import { JwtModule } from '@auth0/angular-jwt';
import { AuthService } from './serviices/auth.service';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { CarAddComponent } from './components/car-add/car-add.component';
import { ColorAddComponent } from './components/color-add/color-add.component';
import { BrandAddComponent } from './components/brand-add/brand-add.component';
import { CarupdateComponent } from './components/carupdate/carupdate.component';
import { RegisterComponent } from './components/register/register.component';
import { BrandFilterPipe } from './pipe/brand-filter.pipe';
import { ColorFilterPipe } from './pipe/color-filter.pipe';
import { UserComponent } from './components/user/user.component';
import { UserRentalComponent } from './components/user-rental/user-rental.component';
import { HomeComponent } from './components/home/home.component';
import { FindexComponent } from './components/findex/findex.component';

export function tokenGetter() {
  return localStorage.getItem("token");
}




@NgModule({
  declarations: [
    AppComponent,
    NaviComponent,
    CarComponent,
    ColorComponent,
    BrandComponent,
    CarDetailComponent,
    FilterPipePipe,
    PaymentComponent,
    LoginComponent,
    CarAddComponent,
    ColorAddComponent,
    BrandAddComponent,
    CarupdateComponent,
    RegisterComponent,
    BrandFilterPipe,
    ColorFilterPipe,
    UserComponent,
    UserRentalComponent,
    HomeComponent,
    FindexComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      positionClass:"toast-top-left"
    }),
    JwtModule.forRoot({
      config:{
        tokenGetter: tokenGetter,
      }
    }),

  ],
  providers: [
    {provide:HTTP_INTERCEPTORS,useClass:AuthInterceptor,multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
