import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray, AbstractControl, FormControl } from '@angular/forms';
import { userProfiles, skills, workExperience } from '../../data-type';
import { JobService } from '../../service/job.service';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {
  
  userForm: FormGroup;
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

    this.userForm= this.fb.group({
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
    return this.userForm.get("workExperience") as FormArray
  }
  addExperience(){
    this.ExperienceFormArry.push(this.newExperience());
  }

  removeExperience(i:number){
    this.ExperienceFormArry.removeAt(i);
  }

  get skillsFormArray(): FormArray {
    return this.userForm.get("skills") as FormArray
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
      
  submitUser() {
    // console.log( "userForm ",this.userForm);

    this._jobservice.postUserProfile(this.userForm.value).subscribe((data)=>{
console.log("userProfile created !",data);
this.router.navigateByUrl('/job-listing');
    })
    const emp = this.userForm.value;
    console.log("userform : value", emp);
  }
}

