import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JobService } from 'src/app/service/job.service';

@Component({
  selector: 'app-applied-job-seeker',
  templateUrl: './applied-job-seeker.component.html',
  styleUrls: ['./applied-job-seeker.component.css']
})
export class AppliedJobSeekerComponent implements OnInit {
  jobApplications: any[] = [];
  jobTitle !: any;
  jobListings: any[] = [];
  searchTerm: string = '';

  constructor( private jobApplicationService:JobService,
    private route :ActivatedRoute){}

  ngOnInit(): void {
    
      this.getJobApplications(); 
  }

  getJobApplications(): void {
    this.jobApplicationService.getJobApplications().subscribe(
      (data) => {
        this.jobApplications = data;
        console.log("data",data);
        this.route.paramMap.subscribe(params => {
          const id = params.get('id');
          // console.log("joblisting id",id);
          if (id !== null) {
            
           this.jobApplicationService.getDataById(id).subscribe(jobDetails => {
              this.jobTitle = jobDetails;
              // console.log("jobDetails",jobDetails);
            });
          }
        });
      },
      (error) => {
        console.error('Error retrieving job applications:', error);
      }
    );
  }
  onSearchInputChange(event: any): void {
  console.log(" this.searchTerm = event.target.value;",this.searchTerm = event.target.value);
  
    this.filterJobs();
  }
 
  search(): void {
    this.filterJobs();
  }
 
  filterJobs(): void {
    this.jobApplications.forEach((application) => {
      const txtValue = `${application.jobListingId} ${application.jobSeekerId} ${application.name}`.toUpperCase();
     console.log("txtValue",txtValue);
     
      application.hidden = !(txtValue.includes(this.searchTerm.toUpperCase()));
    });
  }
}
