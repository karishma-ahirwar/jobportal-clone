import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { JobService } from 'src/app/service/job.service';

@Component({
  selector: 'app-job-application',
  templateUrl: './job-application.component.html',
  styleUrls: ['./job-application.component.css']
})
export class JobApplicationComponent {
  applicationForm !: FormGroup;
  jobTitle !: any;
  status !: boolean;
  userId :any
  jobListingId: any;
  

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private jobService: JobService
  ) {}

  ngOnInit(): void {
    
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      // console.log("joblisting id",id);
      if (id !== null) {
       this.jobService.getDataById(id).subscribe(jobDetails => {
          this.jobTitle = jobDetails;
          // console.log("jobDetails",jobDetails);
        });
        // console.log("getjobdetails end");
         
      }
    });
          
   const userData = localStorage.getItem('currentUser');
   if (userData) {
     this.userId = JSON.parse(userData);
     console.log("userId in application jobseekr id :", this.userId);
   } else {
     console.error('User data is null in localStorage.');
   }
    
    this.applicationForm = this.fb.group({
      name: ['', Validators.required],
      resume: [null, Validators.required],
      
    });
  }
  
  submitApplication(): void {
    if (this.applicationForm.valid) {
      const jobId = this.route.snapshot.paramMap.get('id');
      console.log("jobId",jobId);
      
    // this.jobSeekerId = this.route.snapshot.params['id'];
    // console.log("jobSeekerId",this.jobSeekerId);
    
    console.log("submitApplication jobListingId",this.jobListingId);

  const nameControl = this.applicationForm.get('name');
  const resumeControl = this.applicationForm.get('resume');

      const applicationData = {
        jobListingId: jobId,
        jobSeekerId: this.userId.id,
        applicuserIdDate: new Date().toISOString(),
        status: 'Pending' ,
        message: 'Your application message here',
        name: nameControl!.value, 
        resume: resumeControl!.value
      };

      this.jobService.submitJobApplications(this.userId, this.jobListingId,applicationData).subscribe(
        ( response: any) => {
          console.log('Application submitted successfully!', response);
          // this.router.navigate(['/apply', id]);
          alert("'Application submitted successfully!");
          this.router.navigateByUrl('job-listing');
        },
        (error: any) => {
          console.error('Error submitting application', error);
        }
      );
    } else {
      console.log("Not found error");
      
    }
  }
}
