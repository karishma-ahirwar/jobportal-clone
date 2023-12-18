import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { JobService } from 'src/app/service/job.service';

@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.css']
})
export class EdituserComponent {
  edituserForm: any;
  userId: any;

  constructor(private fb:FormBuilder, 
    private _jobservice : JobService ,
    private router:Router){

      const userData = localStorage.getItem('currentUser');
      if (userData) {
        const user = JSON.parse(userData);
        this.userId = user;
        console.log(user,"user");
      
    }

    this.edituserForm= this.fb.group({
      userId : [this.userId.id ],
      name: ['',Validators.required],
      degree: ['', Validators.required],
      university: ['', Validators.required],
      year: ['', Validators.required],
      workExperience: this.fb.array([]),
      skills: this.fb.array([]),
      profilePicture: ['', Validators.required],
      resumeUrl: ['', Validators.required],
    });

  }
  ngOnInit(): void {
   
  }
  fetchJobseekerData(){
    this._jobservice.getUserProfilesById(this.userId).subscribe((response)=>{
      this.edituserForm.patchValue(response);
    },
    (error)=>{
      console.error('Error fetching jobseeker data:', error);
    
    })
  }
  OnSubmit(){
    if(this.edituserForm.valid){
      const jobseekerdata= this.edituserForm.value;
      this._jobservice.updateUserProfile(this.userId,jobseekerdata).subscribe((response)=>{
        console.log('jobseeker updated successfully:', response);
       
      },
      (error)=>{
        console.error('Error updating recruiter:', error);
       
      });
    }
  }

newExperience():FormGroup{
return this.fb.group({
  id : Number,
  title : ['', Validators.required], 
  company : ['', Validators.required],
  startDate : ['', Validators.required],
  endDate : ['', Validators.required],
  description : ['', Validators.required],
})
  }
  get ExperienceFormArry(): FormArray{
    return this.edituserForm.get("workExperience") as FormArray
  }
  addExperience(){
    this.ExperienceFormArry.push(this.newExperience());
  }

  removeExperience(i:number){
    this.ExperienceFormArry.removeAt(i);
  }

  get skillsFormArray(): FormArray {
    return this.edituserForm.get("skills") as FormArray
  }

  newSkill():FormGroup{
    return this.fb.group({
      name : ['', Validators.required],
    })

  }
  Addskills(){
    this.skillsFormArray.push(this.newSkill());
  }

  removebtn(i:number){
    this.skillsFormArray.removeAt(i);
      }
      

}
