import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'jobportal-clone';
  isLoggedIn : boolean = false;
  userInfo :any ;
 
  constructor(private cookieService : CookieService , private router :Router){

    // const userallinfo = localStorage.getItem('token');
    // console.log("userallinfo",userallinfo);
    
    const userData = localStorage.getItem('currentUser');
    console.log('Stored Data:',userData);
    
    // const cookieValue = this.cookieService.get('cookies');
    // console.log(cookieValue,"cookies",userData);
    
    if(userData == null){
      this.isLoggedIn = false;
    }
    else{
      this.isLoggedIn = true;
      // console.log("userData",userData);
      
      this.userInfo = JSON.parse(userData);
      console.log("userInfo",this.userInfo);
    
    }
  }

  logOff(){
    const confirmation = confirm("Do you want to logout !")
  if(confirmation){
    localStorage.removeItem('currentUser');
  // this.isLoggedIn = false;
  this.router.navigateByUrl("/");
  }
  }
}
