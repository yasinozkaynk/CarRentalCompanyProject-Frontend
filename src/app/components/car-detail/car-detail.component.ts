import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Car } from 'src/app/models/car';
import { CarDto } from 'src/app/models/carDto';
import { Customer } from 'src/app/models/customer';
import { CustomerDto } from 'src/app/models/customerdto';
import { Rental } from 'src/app/models/rental';
import { RentalDto } from 'src/app/models/rentaldto';
import { CarDetailService } from 'src/app/serviices/car-detail.service';
import { CarRentalService } from 'src/app/serviices/car-rental.service';
import { CustomerService } from 'src/app/serviices/customer.service';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {

  cars:Car[]=[]
  customers:CustomerDto[]=[]
  rentals:Rental[]=[]
  rental:Rental;
  rentalDtos:RentalDto[]=[]
  rentdate:Date;
  returndate:Date;
  customerId:number
  isRented:boolean = false;
  @Input() carforrental:CarDto;
  constructor(
    private cardetailService:CarDetailService,
    private activatedRoute:ActivatedRoute,
    private customerService:CustomerService,
    private carrentalService:CarRentalService,
    private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["carId"]){
        this.getCar(params["carId"]);
      }
    })
    this.getAllCustomer();
    this.getRental();

  }

  getCar(carId:number){
    this.cardetailService.carDetail(carId).subscribe(response=>{
      this.cars=response.data;
    })
  }
  getAllCustomer(){
    this.customerService.getCustomersDto().subscribe(response=>{
      this.customers=response.data
    })
  }
  getRental(){
    this.carrentalService.getAll().subscribe(response=>{
    this.rentals=response.data
      })
   }
   getRentalDtos() {
    this.carrentalService.getRentals().subscribe(response => {
      this.rentalDtos = response.data;
    })
   }
   
   createRent()
   {
    let rent:Rental = {
     carID:this.carforrental.carID,
     customerID:this.customerId,
      rentDate:this.rentdate,
      returnDate:this.returndate,
      price:this.carforrental.dailyPrice 
    };
     this.rental = rent;
      this.isRented = true;
      this.toastrService.success("Your rental request has been received. You are redirected to the payment page.");
    }

}
