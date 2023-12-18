import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { JobService } from '../../service/job.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recruiter-info',
  templateUrl: './recruiter-info.component.html',
  styleUrls: ['./recruiter-info.component.css']
})
export class RecruiterInfoComponent {
  recruiterForm : FormGroup;
  userId: any;


  constructor( private fb : FormBuilder,
    private recruterService :JobService,
    private router : Router){

      const userData = localStorage.getItem('currentUser');
      if (userData) {
        const user = JSON.parse(userData);
        this.userId = user;
        console.log(user,"currentUser recruiter user");
        
      }


    this.recruiterForm =fb.group({
      userId :[ this.userId.id,Validators.required],
      companyName: ['', Validators.required],
      email: [this.userId.email, [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      address: ['', Validators.required],
    });
  }
  recruiter(){
  console.log(  this.recruiterForm.value);
  const data = this.recruiterForm.value;
  this.recruterService.postRecruiter(data).subscribe((response :any)=>{
    console.log("Recruiter profile data :",response);
    this.router.navigateByUrl('recruiter-home');
  })
  
  }
}
