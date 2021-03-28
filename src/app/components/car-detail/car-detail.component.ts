import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/car';
import { CarDetailService } from 'src/app/serviices/car-detail.service';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {

  cars:Car[]=[]
  constructor(private cardetail:CarDetailService,
    private active:ActivatedRoute) { }

  ngOnInit(): void {
    this.active.params.subscribe(params=>{
      if(params["carId"]){
        this.getCar(params["carId"]);
      }
    })
    
  }

  getCar(carId:number){
    this.cardetail.carDetail(carId).subscribe(response=>{
      this.cars=response.data;
    })
  }

}
