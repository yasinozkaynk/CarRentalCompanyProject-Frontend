import { HttpClient } from '@angular/common/http';
import { ThisReceiver } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Color } from '../models/color';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class ColorService {

  apiUrl="https://localhost:44392/api/"
  constructor(private httpClient:HttpClient) { }

  getColor():Observable<ListResponseModel<Color>>{
    let newPath=this.apiUrl + "color/getall"
    return this.httpClient.get<ListResponseModel<Color>>(newPath)

  }
  addColor(color:Color):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl + "color/add",color)
  }
  updateColor(color:Color):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl + "color/update",color)
  }
  deleteColor(color:Color):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl + "color/delete",color)
  }
}
