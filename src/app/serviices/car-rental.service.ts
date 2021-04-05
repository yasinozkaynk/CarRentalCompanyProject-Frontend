import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Rental } from '../models/rental';
import { RentalDto } from '../models/rentaldto';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class CarRentalService {

  apiUrl="https://localhost:44392/api/"
  constructor(private httpClient:HttpClient) { }

  getRentalDto(): Observable<ListResponseModel<RentalDto>> {
    let newPath = this.apiUrl + "rentals/getrentaldetails"
    return this.httpClient.get<ListResponseModel<RentalDto>>(newPath);
  }
  getRentals():Observable<ListResponseModel<Rental>>{
    let newPath=this.apiUrl + "rentals/getall"
    return this.httpClient.get<ListResponseModel<Rental>>(newPath)
  }
  addRental(rental:Rental):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl+"rentals/add",rental)
  }
  checkCarStatus(rental:Rental):Observable<ResponseModel> {
    let newPath = this.apiUrl + "rentals/add";
    return this.httpClient.post<ResponseModel>(newPath,rental);
  }

}
