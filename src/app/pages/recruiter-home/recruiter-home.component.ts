import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { recruiters } from 'src/app/data-type';
import { JobService } from 'src/app/service/job.service';

@Component({
  selector: 'app-recruiter-home',
  templateUrl: './recruiter-home.component.html',
  styleUrls: ['./recruiter-home.component.css']
})
export class RecruiterHomeComponent implements OnInit {

  isClick:boolean = true;
  public id !: string|null; 
  Posts: any[] = [];
  recruiterInfo : any[]=[];
  applications : any[] = [];
  userId : any;
  
  jobListings: any[] = [];
  searchTerm: string = '';

  constructor(private router:Router,
    private _jobService : JobService,
     private route : ActivatedRoute 
    ){}
  
    ngOnInit(): void {

    this.getrecruiterId();
    this.fetchJobListings();
    
  }
      getrecruiterId(){
        const userId = localStorage.getItem('recruiterId');
        if (userId) {
          this._jobService.getDataByUserID(userId).subscribe(
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

      // fetchRecruiterInfo(data:any): void {
      //   this._jobService.postRecruiter(data).subscribe(
      //     (info:any) => {
      //       this.recruiterInfo = info;
      //     },
      //     (error) => {
      //       console.error('Error fetching recruiter information:', error);
      //     }
      //   );
      // }
    fetchJobListings():void{
  // this.id = this.route.snapshot.paramMap.get('id');
      this._jobService.getdataSeeker().subscribe((data :any)=>{
        if (Array.isArray(data)) {
      this.Posts = data;
    } else {
      console.error('Invalid data format received:', data);
    }
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
        console.log("txtValue",txtValue);
        
        post.hidden = !(txtValue.includes(this.searchTerm.toUpperCase()));
      });
    }
    
    viewAppliedJobSeekers(): void {
      this.router.navigateByUrl('applied-job-seeker');
      // const recruiterId = localStorage.getItem('recruiterId');
      // const jobSeekerId = localStorage.getItem('jobSeekerId');
  
      // if (recruiterId) {
      //   // Redirect to applied job seekers page with recruiter ID
      //   this.router.navigate(['/applied-job-seeker'], { queryParams: { userId: recruiterId } });
      // } else if (jobSeekerId) {
      //   console.log('Job Seeker ID:', jobSeekerId);
      // } else {
      //   console.error('ID not found in local storage');
      // }
    }

  viewJobDetail(jobId: number): void {
    // Navigate to job detail page using the job id
    console.log(`viewing post with id : ${jobId}`);
    this.router.navigate(['/job-detail', jobId]);
  }
  deleteFunc(id : any){
    this._jobService.deleteRecruiterPost(id).subscribe((data)=>{
      console.log("Remove successfully !!");
    },
    (error)=>{
      console.log("some error occured while deleting");
    });
    this.router.navigateByUrl('recruiter-home');
  }
}
