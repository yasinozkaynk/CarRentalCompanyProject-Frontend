import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';
import { User } from '../models/user';
import { UserRental } from '../models/user-rental';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiUrl="https://localhost:44392/api/user"

  constructor(private httpClient:HttpClient) { }

  getRentalByUserId(userId:number) : Observable<ListResponseModel<UserRental>>{
    let newPath = this.apiUrl+"/getrentaldetailbyuserid?userid="+userId;
    return this.httpClient.get<ListResponseModel<UserRental>>(newPath);
  }
}

