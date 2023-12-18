import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { userProfiles } from 'src/app/data-type';
import { JobService } from 'src/app/service/job.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  userId: any;
  // userForm :any;
  userProfile: userProfiles | undefined;

  constructor(private UserService:JobService,private route:ActivatedRoute){

    const userData = localStorage.getItem('currentUser');
    if (userData) {
      const user = JSON.parse(userData);
      this.userId = user.id;
      console.log("currentUser jobseekers user",user);
    }
  }

  ngOnInit(): void {
    this.getUserProfiles();
  }
  getUserProfiles(){
    // const userId = +this.route.snapshot.paramMap.get('id')!;
    this.UserService.getUserProfilesById(this.userId).subscribe((userProfile:any)=>{
        userProfile = userProfile
        console.log("userProfile details",userProfile);
        
        },
      error => console.error('Error fetching user profile', error)
    );

    // this.UserService.getUserProfilesById(this.userId).subscribe((response :any)=>{
    //   console.log("api response",response);
    //   if(response && response.length>0){
    //     this.userForm = response[0];
    //     console.log("jobSeeker userProfile details",this.userForm);
    //   }
    // },
    // (error)=>{
    //   console.log("error fetching userProfile" , error);
      
    // })
  }

  // isArrayNotEmpty(array: any[]): boolean {
  //   return array && array.length > 0;
  // }
  }

  
