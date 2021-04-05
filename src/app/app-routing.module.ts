import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandAddComponent } from './components/brand-add/brand-add.component';
import { CarAddComponent } from './components/car-add/car-add.component';
import { CarDetailComponent } from './components/car-detail/car-detail.component';
import { CarComponent } from './components/car/car.component';
import { ColorAddComponent } from './components/color-add/color-add.component';
import { LoginComponent } from './components/login/login.component';
import { PaymentComponent } from './components/payment/payment.component';
import { RegisterComponent } from './components/register/register.component';
import { AdminGuard } from './guards/admin.guard';
import { LoginGuard } from './guards/login.guard';


const routes: Routes = [
  {path:"",pathMatch:"full", component:CarComponent},
  {path:"cars",  component:CarComponent},
  {path:"payments",component:PaymentComponent , canActivate:[LoginGuard]},
  {path:"cars/color/:colorId",component:CarComponent},
  {path:"cars/brand/:brandId",component:CarComponent},
  {path:"cars/cardetail/:carId",component:CarDetailComponent},
  {path:"login",component:LoginComponent},
  {path:"login/register",component:RegisterComponent},
  {path:"caradd",component:CarAddComponent,canActivate:[AdminGuard]},
  {path:"brandadd",component:BrandAddComponent,canActivate:[AdminGuard]},
  {path:"coloradd",component:ColorAddComponent,canActivate:[AdminGuard]},
  
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
