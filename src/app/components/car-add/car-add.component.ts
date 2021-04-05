import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,FormControl,Validators} from "@angular/forms"
import { ToastrService } from 'ngx-toastr';
import { Brand } from 'src/app/models/brand';
import { CarDto } from 'src/app/models/carDto';
import { Color } from 'src/app/models/color';
import { BrandService } from 'src/app/serviices/brand.service';
import { CarService } from 'src/app/serviices/car.service';
import { ColorService } from 'src/app/serviices/color.service';

@Component({
  selector: 'app-car-add',
  templateUrl: './car-add.component.html',
  styleUrls: ['./car-add.component.css']
})
export class CarAddComponent implements OnInit {
  colors:Color[]=[];
  brands:Brand[]=[];

  constructor(private toastrService:ToastrService,
    private carService:CarService,
    private brandService:BrandService,
    private colorService:ColorService,
    private formBuilder:FormBuilder
    ) { }

  carAddForm:FormGroup;
  ngOnInit(): void {
    this.getAllBrands();
    this.getAllColors();
    this.createCarAddForm();
  }
  
  getAllBrands()
  {
    this.brandService.getBrand().subscribe(response =>{
      this.brands = response.data;
    });
  }
  getAllColors()
  {
    this.colorService.getColor().subscribe(response =>{
      this.colors = response.data;
    });
  }
  createCarAddForm() {
    this.carAddForm = this.formBuilder.group({
      brandID: ["", Validators.required],
      colorID: ["", Validators.required],
      modelYear: ["", Validators.required],
      dailyPrice: ["", Validators.required],
      description: ["", Validators.required],
    });
  }
  addCar() {
    if (this.carAddForm.valid) {
      let carModel = Object.assign({}, this.carAddForm.value);
      this.carService.addCar(carModel).subscribe(response => {
        this.toastrService.success(response.message, "Başarılı");
      }, responseError => {
        if(responseError.error.Errors.length>0){
         for (let i = 0; i < responseError.error.Errors.length; i++) {
          this.toastrService.error(responseError.error.Errors[i].ErrorMessage, "Validation Error");          
           }
          }
      });
    }
    else{
        this.toastrService.error("Please fill in all fields on the form","Error");
    }
  }


}
