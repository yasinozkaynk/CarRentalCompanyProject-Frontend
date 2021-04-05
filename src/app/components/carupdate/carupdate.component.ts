import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Brand } from 'src/app/models/brand';
import { Color } from 'src/app/models/color';
import { AuthService } from 'src/app/serviices/auth.service';
import { BrandService } from 'src/app/serviices/brand.service';
import { CarService } from 'src/app/serviices/car.service';
import { ColorService } from 'src/app/serviices/color.service';

@Component({
  selector: 'app-carupdate',
  templateUrl: './carupdate.component.html',
  styleUrls: ['./carupdate.component.css'],
})
export class CarupdateComponent implements OnInit {
  brands:Brand[]=[]
  colors:Color[]=[]
  constructor(private carServcie:CarService,
  private toastrService:ToastrService,
  private formBuilder:FormBuilder,
  private brandService:BrandService,
  private colorService:ColorService,
  private authService:AuthService,
  ) {}

  carUpdateForm:FormGroup

  ngOnInit(): void {
    this.getAllColors();
    this.getAllBrands();
    this.createBrandUpdateForm();
  }
  checkAdminRole(){
    if(this.authService.role=="Admin"){
      return true
    }
    else{
      return false
    }
   }

  getAllBrands() {
    this.brandService.getBrand().subscribe((response) => {
      this.brands = response.data;
    });
  }
  getAllColors() {
    this.colorService.getColor().subscribe((response) => {
      this.colors = response.data;
    });
  }

  createBrandUpdateForm() {
    this.carUpdateForm = this.formBuilder.group({
      carId: ['', Validators.required],
      brandId: ['', Validators.required],
      colorId: ['', Validators.required],
      modelYear: ['', Validators.required],
      dailyPrice: ['', Validators.required],
      description: ['', Validators.required],
    });
  }
  carUpdate(){
    if(this.carUpdateForm.valid){
      let modal=Object.assign({},this.carUpdateForm.value);
      this.carServcie.updateCar(modal).subscribe(response=>{
        this.toastrService.success(response.message,"Güncelleme Başarılı")
      },responseError => {
        if(responseError.error.Errors.length>0){
         for (let i = 0; i < responseError.error.Errors.length; i++) {
          this.toastrService.error(responseError.error.Errors[i].ErrorMessage, "Validation Error");          
           }
          }
      });
    }
  }
}
