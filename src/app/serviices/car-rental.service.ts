import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Rental } from '../models/rental';
import { RentalDto } from '../models/rentaldto';

@Injectable({
  providedIn: 'root'
})
export class CarRentalService {

  apiUrl="https://localhost:44392/api/"
  constructor(private httpClient:HttpClient) { }

  getRentals(): Observable<ListResponseModel<RentalDto>> {
    let newPath = this.apiUrl + "rentals/getrentaldetails"
    return this.httpClient.get<ListResponseModel<RentalDto>>(newPath);
  }
  getAll():Observable<ListResponseModel<Rental>>{
    let newPath=this.apiUrl + "rentals/getall"
    return this.httpClient.get<ListResponseModel<Rental>>(newPath)
  }
}
