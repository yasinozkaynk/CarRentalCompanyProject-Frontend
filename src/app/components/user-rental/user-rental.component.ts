import { Component, OnInit } from '@angular/core';
import { UserRental } from 'src/app/models/user-rental';
import { AuthService } from 'src/app/serviices/auth.service';
import { UserService } from 'src/app/serviices/user.service';

@Component({
  selector: 'app-user-rental',
  templateUrl: './user-rental.component.html',
  styleUrls: ['./user-rental.component.css']
})
export class UserRentalComponent implements OnInit {

  rentals:UserRental[]=[]
  constructor(private userService:UserService,
    private authService:AuthService
    ) { }

  ngOnInit(): void {
    this.getRetalByUserId(this.authService.userId)
  }
  getRetalByUserId(userId:number){
    this.userService.getRentalByUserId(userId).subscribe(response => {
    this.rentals = response.data;
    })
  }

}
