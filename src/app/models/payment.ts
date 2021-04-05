export interface Payment{
    paymentId?:number;
    cardNameSurname:string;
    cardNumber: number;
    cardExpiryDate:number;
    cardCvv:number;
    amountPaye:number;
}