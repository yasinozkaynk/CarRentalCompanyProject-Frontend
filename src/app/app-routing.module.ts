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
import { UserRentalComponent } from './components/user-rental/user-rental.component';
import { UserComponent } from './components/user/user.component';
import { AdminGuard } from './guards/admin.guard';
import { LoginGuard } from './guards/login.guard';


const routes: Routes = [
  {path:"home",pathMatch:"full", component:CarComponent},
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
  {path:"user",component:UserComponent},
  {path:"userrental",component:UserRentalComponent},
  {path:"cars/brand/:brandId/cars/cardetail/:carId",component:CarDetailComponent},

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
