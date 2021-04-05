import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/serviices/auth.service';
import {FormGroup,FormBuilder,FormControl,Validators} from "@angular/forms"
import { User } from 'src/app/models/user';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users:User[]=[]
  constructor(public authService:AuthService,
    private toastrService:ToastrService,
    private formBuilder:FormBuilder) { }

   userUpdateForm:FormGroup;

  ngOnInit(): void {
    if(this.isAuthenticated()){
      this.authService.userDetailFromToken(); 
     this.createUpdateForm() 
     this.userUpdateForm.patchValue({
      id:this.authService.userId,
      firstName: this.authService.name,
      lastName: this.authService.surname,
      email:this.authService.email  
    });
    } 
  }
  createUpdateForm(){
    this.userUpdateForm=this.formBuilder.group({
      id:["",Validators.required],
      firstName: ["",Validators.required],
      lastName: ["",Validators.required],
      email:["",Validators.required],
      password:["",Validators.required]
    })
  }
  update(){
    if (this.userUpdateForm.valid) {
      let modal=Object.assign({},this.userUpdateForm.value)
      this.authService.update(modal).subscribe(response=>{
        this.toastrService.success(response.message,"Bilgileriniz Güncellebdi")
      },responseError=>{
        this.toastrService.error(responseError.error);
      })
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

}
