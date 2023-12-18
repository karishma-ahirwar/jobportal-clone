
import { Component } from '@angular/core';
import { JobService } from 'src/app/service/job.service';
import { JobSeeker, recruiters } from 'src/app/data-type';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registrationForm: FormGroup;
  roles: string[] = ['jobseeker', 'recruiter']; // Add more roles as needed

  constructor(private formBuilder: FormBuilder,
     private userService: JobService,
     private router :Router) {
    
    this.registrationForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      role: ['', Validators.required],
    });
  }
  register(): void {
    if (this.registrationForm.valid) {
      const userData = this.registrationForm.value;
      this.userService.registerUser(userData).subscribe(
        (response: any) => {
          console.log('User registered successfully:', response);
          this.router.navigateByUrl('login');
        },
        (error: any) => {
          console.error('Registration failed:', error);
        }
      );
    }
  }
}
