import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NaviComponent } from './components/navi/navi.component';
import { CarComponent } from './components/car/car.component';
import { ColorComponent } from './components/color/color.component';
import { BrandComponent } from './components/brand/brand.component';
import { CarDetailComponent } from './components/car-detail/car-detail.component';
import { FilterPipePipe } from './pipe/filter-pipe.pipe';
import { CarRentalComponent } from './components/car-rental/car-rental.component';

import{ToastrModule} from 'ngx-toastr';
import { from } from 'rxjs';


@NgModule({
  declarations: [
    AppComponent,
    NaviComponent,
    CarComponent,
    ColorComponent,
    BrandComponent,
    CarDetailComponent,
    FilterPipePipe,
    CarRentalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      positionClass:"toast-top-left"
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
