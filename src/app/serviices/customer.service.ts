import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../models/customer';
import { CustomerDto } from '../models/customerdto';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  apiUrl="https://localhost:44392/api/"
  constructor(private httpClient:HttpClient) { }

  getCustomer():Observable<ListResponseModel<CustomerDto>>{
    let newPath=this.apiUrl + "customers/getall"
    return this.httpClient.get<ListResponseModel<CustomerDto>>(newPath)
  }

  getCustomersDto():Observable<ListResponseModel<CustomerDto>>{
    let newPath=this.apiUrl + "customers/getcustomerdto"
    return this.httpClient.get<ListResponseModel<CustomerDto>>(newPath)

  }
}
