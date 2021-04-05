import { ResponseModel } from "./responseModel";

export interface Model<T> extends ResponseModel{
    data:T
}