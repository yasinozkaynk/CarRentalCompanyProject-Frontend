import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/serviices/auth.service';

@Component({
  selector: 'app-navi',
  templateUrl: './navi.component.html',
  styleUrls: ['./navi.component.css']
})
export class NaviComponent implements OnInit {

  constructor(public authService:AuthService,private router:Router) { }

  ngOnInit(): void {
    if(this.isAuthenticated()){
      this.authService.userDetailFromToken();
    }
  }
  isAuthenticated(){
    if(this.authService.isAuthenticated()){
      return true
    }
    else{
      return false
    }
   }
   checkAdminRole(){
    if(this.authService.role=="Admin"){
      return true
    }
    else{
      return false
    }
   }
   checkUserRole(){
    if(this.authService.role=="Kullanici" ){
      return true
    }
    else{
      return false
    }
   }
   logOut() {
    this.authService.logout();
    this.router.navigate([''])

  }


}
