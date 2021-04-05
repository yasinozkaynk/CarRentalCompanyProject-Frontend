import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Car } from 'src/app/models/car';
import { CarDto } from 'src/app/models/carDto';
import { Payment } from 'src/app/models/payment';
import { Rental } from 'src/app/models/rental';
import { CarRentalService } from 'src/app/serviices/car-rental.service';
import { CarService } from 'src/app/serviices/car.service';
import { PaymentService } from 'src/app/serviices/payment.service';


@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  carDetail: Car[]=[];
  carToBeRented:Rental;
  payment:Payment;
  
  //Payment 
  cardName!:string;
  cardNumber!:number;
  cardDateMonth!:number;
  cardDateYear!:number;
  cardDate:number;
  cardCvv!:number;
  amountPaye:number;
  carBrandName:string;

  constructor(
    private paymentService:PaymentService,
    private toastrService:ToastrService,
    private router:Router) { }

  
  ngOnInit(): void {
    this.carToBeRented = this.paymentService.getRental();
    this.amountPaye = this.paymentService.getRentalAmountPaye();   
    if ( (this.carToBeRented === undefined) || (this.amountPaye <= 0) ){
      this.router.navigate(['']);
      this.toastrService.error("Araç listesine yönlendiriliyorsunuz", "Hatalı işlem");
    }
  }
  createPayment(){
      this.payment = {
        cardNameSurname : this.cardName,
        cardNumber : this.cardNumber,
        cardExpiryDate : this.cardDate,
        cardCvv : this.cardCvv,
        amountPaye : this.amountPaye
      }
      this.paymentService.addPayment(this.payment).subscribe(response=>{
        this.toastrService.success("ödeme başarılı")
        this.router.navigate(['']);
        this.toastrService.success("Ana Sayfaya Yönlendiriliyorsunuz", "Araç Kiralandı");
      })
     
  }
}