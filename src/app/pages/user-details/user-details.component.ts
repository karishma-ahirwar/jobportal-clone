import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { userProfiles } from 'src/app/data-type';
import { JobService } from 'src/app/service/job.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  userId: any;
  userProfile: any;

  constructor(
    private UserService:JobService,
    private route:ActivatedRoute,
    private router:Router
    ){

    const userData = localStorage.getItem('currentUser');
    if (userData) {
      const user = JSON.parse(userData);
      this.userId = user;
      console.log("currentUser jobseekers user",user);
    }
  }

  ngOnInit(): void {
    this.getUserProfile();
  }
  
  getUserProfile() {
    this.UserService.getUserProfilesById(this.userId.id).subscribe(
      (profile) => {
        this.userProfile = profile;
        console.log('User profile retrieved successfully:', this.userProfile);
      },
      (error) => {
        console.error('Error retrieving user profile:', error);
      }
    );
  }

  
  }






















  
