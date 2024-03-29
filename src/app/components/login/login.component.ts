import { ThisReceiver } from '@angular/compiler';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormGroup,FormControl,Validators,FormBuilder} from "@angular/forms"
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/serviices/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [NgbModalConfig, NgbModal]

})
export class LoginComponent implements OnInit {

  loginForm:FormGroup
  constructor(private formBuilder:FormBuilder,
    private authService:AuthService,private toastrService:ToastrService,
    private router:Router, private config:NgbModalConfig, private modalService: NgbModal
    ) {    config.backdrop = 'static';
    config.keyboard = false;}

    open(content: any) {
      this.modalService.open(content);
    }

  ngOnInit(): void {
    this.createLoginForm()
  }
  createLoginForm(){
     this.loginForm=this.formBuilder.group({
       email:["",Validators.required],
       password:["",Validators.required]
     })
  }
  login(){
    if(this.loginForm.valid){
      let loginModel =Object.assign(this.loginForm.value)
      this.authService.login(loginModel).subscribe(response=>{
        this.toastrService.info(response.message,"Giriş Yapıldı")
        localStorage.setItem("token",response.data.token)
        this.router.navigate(['']);
      },responseError=>{
        this.toastrService.error(responseError.error,"Kullanıcı Bulunamadı")
      })
    }
  }

}
