import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JobService } from 'src/app/service/job.service';


@Component({
  selector: 'app-job-listing',
  templateUrl: './job-listing.component.html',
  styleUrls: ['./job-listing.component.css']
})
export class JobListingComponent implements OnInit {
  public id !: string | null;
  Posts: any[] = [];
  post: any;
  userProfileForm: any;
  jobListings: any[] = [];
  searchTerm: string = '';


   constructor(private _jobservice: JobService,
    private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.getjobSeekerId();
    this.fetchJobListings();
  }

  getjobSeekerId(){
    const userId = localStorage.getItem('jobSeekerId');
    if (userId) {
      this._jobservice.getDataByUserID(userId).subscribe(
        (data) => {
          this.jobListings = data;
          this.Posts = this.jobListings;
        },
        (error) => {
          console.error('Error fetching job listings:', error);
        }
      );
    }
  }

  fetchJobListings(): void {
    this._jobservice.getdataSeeker().subscribe((data: any) => {
      this.Posts = data;
    },
      (error) => {
        console.error('Error fetching job listings:', error);
      });
  }

  onSearchInputChange(event: any): void {
    this.searchTerm = event.target.value;
    this.filterJobs();
  }
  
  search(): void {
      this.filterJobs();
  }
 
  filterJobs(): void {
    this.Posts.forEach((post) => {
      const txtValue = `${post.title} ${post.location} ${post.company}`.toUpperCase();
      post.hidden = !(txtValue.includes(this.searchTerm.toUpperCase()));
    });
  }
  
  viewJobDetail(jobId: number): void {
    console.log(`viewing post with id : ${jobId}`);
    this.router.navigate(['/job-detail', jobId]
      // ,{ queryParams:{id : "1", company : 'mastek'},}
    );
  }

  // loadUserProfile() {
  //   console.log("userProfile..");
  //   const userProfile = this._jobservice.getUserProfiles();
  //   this.router.navigate(['/user-profile', { userProfile }]);
  // }

  apply(id:any): void {
    console.log('apply called');
    this.router.navigate(['/apply', id]);
   
    
  }
}
