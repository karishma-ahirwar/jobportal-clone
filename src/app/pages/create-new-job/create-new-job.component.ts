import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { jobListings } from 'src/app/data-type';
import { JobService } from 'src/app/service/job.service';
@Component({
  selector: 'app-create-new-job',
  templateUrl: './create-new-job.component.html',
  styleUrls: ['./create-new-job.component.css']
})
export class CreateNewJobComponent {
// job :any []=[];
userId :any
jobPostForm: FormGroup;

constructor(private fb: FormBuilder,
  private jobservice : JobService,
  private router : Router)
   {
    const userData = localStorage.getItem('currentUser');
    if (userData) {
      this.userId = JSON.parse(userData);
      console.log("userId in application jobseekr id :", this.userId.id);
    } else {
      console.error('User data is null in localStorage.');
    }

  this.jobPostForm = this.fb.group({
    title: ['', Validators.required],
    company: ['', Validators.required],
    location: ['', Validators.required],
    postedDate: [new Date, Validators.required],
    description: ['', Validators.required],
    requirements: ['', Validators.required],
    type: ['', Validators.required],
    industry: ['', Validators.required],
    recruiterId: [this.userId.id, Validators.required],
  });
}
submitJobPost(): void {
  console.log("jobPostForm",this.jobPostForm.value);
  this.jobservice.CreateNewjobData(this.jobPostForm.value)
  .subscribe((data)=>{
    console.log("Data sent successfully !!",data);
    alert("create job successfully !");
    this.router.navigateByUrl('/recruiter-home');
  },
  (error)=>{
    console.log("some error occurred ");
  });
  // if (this.jobPostForm.valid) {
  //   // Perform further actions (e.g., send data to a service)
  //   console.log('Job Post Data:', data);
  // } else {
  //   console.log("Form is not valid");
  // }
}

}
