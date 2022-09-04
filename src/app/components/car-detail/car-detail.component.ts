import { invalid } from '@angular/compiler/src/render3/view/util';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder,FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { LoginGuard } from 'src/app/guards/login.guard';
import { Car } from 'src/app/models/car';
import { CarDto } from 'src/app/models/carDto';
import { CustomerDto } from 'src/app/models/customerdto';
import { Findex } from 'src/app/models/findex';
import { Rental } from 'src/app/models/rental';
import { RentalDto } from 'src/app/models/rentaldto';
import { AuthService } from 'src/app/serviices/auth.service';
import { CarDetailService } from 'src/app/serviices/car-detail.service';
import { CarRentalService } from 'src/app/serviices/car-rental.service';
import { CustomerService } from 'src/app/serviices/customer.service';
import { FindexService } from 'src/app/serviices/findex.service';
import { PaymentService } from 'src/app/serviices/payment.service';
import { PaymentComponent } from '../payment/payment.component';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css'],
})
export class CarDetailComponent implements OnInit {
  cars: Car[] = [];
  rentals: Rental[] = [];
  rentalDtos: RentalDto[] = [];
  customers: CustomerDto[] = [];
  rental: Rental;


  rentDate!: Date;
  returnDate!: Date;
  carName!:string;
  carDailyPrice: number;
  amountPaye: number = 0;
  carId: number;
  carBrandName: string;
  carModelName: string;

  constructor(
    private cardetailService: CarDetailService,
    private toastrService: ToastrService,
    private customerService: CustomerService,
    private paymentService:PaymentService,
    private rentalService:CarRentalService,
    private activatedRoute:ActivatedRoute,
    private router: Router,
    public authService:AuthService,

  ) {}

  carRentalAddForm:FormGroup

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['carId']) {
        this.getCar(params['carId']);
      }
    });
    this.isAuthenticated();
  }

  isAuthenticated(){
    if(this.authService.isAuthenticated()){
      return true
    }
    else{
      return false
    }
   }

  getCar(carId: number) {
    this.cardetailService.carDetail(carId).subscribe((response) => {
      this.cars = response.data;
    });

  }

  createRentalRequest(car: Car) {

      this.carId = car.carId;
      this.carBrandName = car.carName;
      this.carDailyPrice = car.dailyPrice;

      let carToBeRented: Rental = {
        carId: this.carId,
        userId:this.authService.userId,
        rentDate: this.rentDate,
        returnDate: this.returnDate,
      };
         this.paymentService.setRental(carToBeRented, this.amountPaye);
         setTimeout(() => {
           this.toastrService.info('Ödeme sayfasına yönlendiriliyorsunuz...','Ödeme İşlemleri');
         }, 1000);
        setTimeout(() => {
         this.router.navigate(['/payments']);
         }, 3000);
  }

}
