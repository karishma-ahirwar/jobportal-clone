import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JobService } from 'src/app/service/job.service';

@Component({
  selector: 'app-rec-profile',
  templateUrl: './rec-profile.component.html',
  styleUrls: ['./rec-profile.component.css']
})
export class RecProfileComponent implements OnInit {
 
  recruiterDetails: any; 
  public id !: string | null;
  userId: any;

  constructor(private recruiterService: JobService ,private route:ActivatedRoute ) { 

    const userData = localStorage.getItem('currentUser');
    if (userData) {
      const user = JSON.parse(userData);
      this.userId = user.id;
      console.log(user,"currentUser recruiter user");
      
    }
  }

  ngOnInit(): void {
    this.getRecruiterDetails();
  }

  getRecruiterDetails() {
  this.recruiterService.getRecruiterById(this.userId).subscribe(
    (response: any) => {
      console.log("API Response:", response);
      if (response && response.length > 0) {
        this.recruiterDetails = response[0];
        console.log("Recruiter Details:", this.recruiterDetails);
      }
    },
    (error) => {
      console.error("Error fetching recruiter details:", error);
    }
  );
  
}
}
