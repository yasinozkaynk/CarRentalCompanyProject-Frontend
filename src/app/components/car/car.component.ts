import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/car';
import { CarService } from 'src/app/serviices/car.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  cars:Car[]=[]
  filterText=""
  constructor(private carService:CarService,
    private active:ActivatedRoute) { }

  ngOnInit(): void {
    this.active.params.subscribe(params=>{
      if(params["colorId"]){
        this.getColor(params["colorId"])
      }
      if(params["brandId"]){
        this.getBrand(params["brandId"])
      }
      else{
        this.getCar();
      }
    })
  }

  getCar(){
    this.carService.getCar().subscribe(response=>{
      this.cars=response.data
    })
  }
  getColor(colorId:number) {
    this.carService.getColorId(colorId).subscribe(response=>{
      this.cars = response.data
    
    })   
  }
  getBrand(brandId:number) {
    this.carService.getBrandId(brandId).subscribe(response=>{
      this.cars = response.data
    })   
  }

}
