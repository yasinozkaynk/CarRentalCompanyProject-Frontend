import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../models/car';
import { CarDto } from '../models/carDto';
import { Color } from '../models/color';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  apiUrl="https://localhost:44392/api/"

  constructor(private httpClient:HttpClient) { }

  getCar():Observable<ListResponseModel<Car>>{
    let newPath=this.apiUrl + "cars/getcarsdetails"
    return this.httpClient.get<ListResponseModel<Car>>(newPath)
  }
  getColorId(colorId:number):Observable<ListResponseModel<Car>>{
    let newPath=this.apiUrl +"cars/getbycolorId?colorId="+colorId
    return this.httpClient.get<ListResponseModel<Car>>(newPath)
  }
  getBrandId(brandId:number):Observable<ListResponseModel<Car>>{
    let newPath=this.apiUrl +"cars/getbybrandId?brandId="+brandId
    return this.httpClient.get<ListResponseModel<Car>>(newPath)
  }
  GetCarDetailsById(carId:number):Observable<ListResponseModel<Car>> {
    let newPath = this.apiUrl + "cars/getbyid?id="+carId;
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }
  addCar(car:CarDto):Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.apiUrl + "cars/add",car)
  }
  updateCar(car:Car):Observable<ResponseModel> {
    let newPath = this.apiUrl + "cars/update";
    return this.httpClient.post<ResponseModel>(newPath, car);
  }
}
