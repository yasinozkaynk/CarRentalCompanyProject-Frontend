import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/serviices/auth.service';

@Component({
  selector: 'app-navi',
  templateUrl: './navi.component.html',
  styleUrls: ['./navi.component.css']
})
export class NaviComponent implements OnInit {

  constructor(public authService:AuthService) { }

  ngOnInit(): void {
    if(this.isAuthenticated()){
      this.authService.userDetailFromToken();  
    } 
    var myModal = document.getElementById('myModal')
   var myInput = document.getElementById('myInput')

   myModal.addEventListener('shown.bs.modal', function () {
   myInput.focus()
})
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
    if(this.authService.role=="Kullanıcı"){
      return true
    }
    else{
      return false
    }
   }
  
   checkNotRole(){
    if(this.authService.role==null){
      return true
    }
    else{
      return false
    }
   }
  
   logOut() {
    this.authService.logout();
  }
   

}
