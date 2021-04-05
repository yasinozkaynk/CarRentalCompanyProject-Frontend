import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { LocalStorageService } from '../serviices/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  token: any;
  roles: any[] = [];
  constructor(private localStorageService:LocalStorageService,
    private jwtHelperService:JwtHelperService,
    private router:Router,
    private toastrService:ToastrService
    ){
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      this.token=this.localStorageService.getItem("token")
      let decodeToken=this.jwtHelperService.decodeToken(this.token);
      this.roles=decodeToken['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'];
      if (this.roles !== undefined) {
          if (this.roles.includes("Admin")){
            return true
          }else{
            this.router.navigate([''])
            this.toastrService.error("Yetkiniz Yok")
            return false;
          }
          }else if(!this.token){
            this.router.navigate(['']);
            this.toastrService.error("Admin olarak giriş yapınız")
            return false;
      }
      this.toastrService.error("Admin olarak giriş yapmalısınız");
      return false
  
    }

  
}
