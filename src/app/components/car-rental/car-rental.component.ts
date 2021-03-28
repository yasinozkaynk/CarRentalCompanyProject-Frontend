import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/models/car';
import { CarRental } from 'src/app/models/car-rental';
import { CarRentalService } from 'src/app/serviices/car-rental.service';

@Component({
  selector: 'app-car-rental',
  templateUrl: './car-rental.component.html',
  styleUrls: ['./car-rental.component.css']
})
export class CarRentalComponent implements OnInit {

  car:Car[]
  rentals:CarRental[]
  constructor(private carrentalService:CarRentalService) { }

  ngOnInit(): void {
    this.getRental();
  }

  getRental(){
    this.carrentalService.getRentals().subscribe(response=>{
      this.rentals=response.data
    })
  }

}
