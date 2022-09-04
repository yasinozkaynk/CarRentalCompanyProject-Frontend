import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../models/car';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class CarDetailService {
  apiUrl="https://localhost:44392/api/"
  carId:number;

  constructor(private httpClient:HttpClient) { }

  carDetail(carId:number):Observable<ListResponseModel<Car>>{
    let newPath= this.apiUrl + "cars/getcarId?carId="+carId
    return this.httpClient.get<ListResponseModel<Car>>(newPath)
  }
}
