import { Component, Input, OnInit } from '@angular/core';
import { Car } from 'src/app/models/car';
import { CarDto } from 'src/app/models/carDto';
import { Customer } from 'src/app/models/customer';
import { CustomerDto } from 'src/app/models/customerdto';
import { Rental } from 'src/app/models/rental';
import { RentalDto } from 'src/app/models/rentaldto';
import { CarRentalService } from 'src/app/serviices/car-rental.service';
import { CustomerService } from 'src/app/serviices/customer.service';

@Component({
  selector: 'app-car-rental',
  templateUrl: './car-rental.component.html',
  styleUrls: ['./car-rental.component.css']
})
export class CarRentalComponent implements OnInit {
  customers:CustomerDto[]=[]
  rentals:Rental[]=[]
  rentalDtos:RentalDto[]=[]
  rental:Rental;
  customerId:number;
  rentdate:Date;
  returndate:Date;
  isRented:boolean = false;
 
  @Input() carforrental:CarDto;
  constructor(private carrentalService:CarRentalService,
    private customerservice:CustomerService) { }

  ngOnInit(): void {
    this.getRental();
    this.getAllCustomer();
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
  getAllCustomer(){
     this.customerservice.getCustomersDto().subscribe(response=>{
     this.customers=response.data;
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
    // this.toastrService.success("Your rental request has been received. You are redirected to the payment page.");
   }

   
    

}
