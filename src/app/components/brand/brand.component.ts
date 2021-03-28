import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Brand } from 'src/app/models/brand';
import { BrandService } from 'src/app/serviices/brand.service';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {

  brands:Brand[]
  currentBrand:Brand
  constructor(private brandService:BrandService,
    private active:ActivatedRoute) { }

  ngOnInit(): void {
    this.getBrand();
  }

  getBrand(){
    this.brandService.getBrand().subscribe(response=>{
      this.brands=response.data
    })
  }
  setCurrentBrandCategory(brand:Brand){
    this.currentBrand = brand;
  }

  getCurrentBrandCategoryClass(brand:Brand){
    if(brand ==this.currentBrand){
      return "list-group-item"
    }else{
      return ""
    }
  }

  getAllBrandCategoryClass(){
       if(!this.currentBrand){
        return "list-group-item active "
       }
       else{
        return "list-group-item"
       }
  }

}
