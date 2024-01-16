import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { JobService } from 'src/app/service/job.service';

@Component({
  selector: 'app-edit-recruiter',
  templateUrl: './edit-recruiter.component.html',
  styleUrls: ['./edit-recruiter.component.css']
})
export class EditRecruiterComponent {
  editRecruiterForm !: FormGroup;
  userId: any;

  constructor(
    private formBuilder: FormBuilder,
    private recruiterService: JobService,
    private route: ActivatedRoute,
    private router : Router
  ) {
    const userData = localStorage.getItem('currentUser');
    if (userData) {
      const user = JSON.parse(userData);
      this.userId = user;
      console.log(user,"currentUser recruiter user");
      
    }
  }

  ngOnInit(): void {
    this.editRecruiterForm = this.formBuilder.group({
      userId :[ this.userId.id,Validators.required],
      email: [this.userId.email, [Validators.required, Validators.email]],
      companyName: ['', Validators.required],
      phone: ['', Validators.required],
      address: [''],
    });

    // Get the recruiterId from the route parameters
    this.route.params.subscribe((params) => {
      this.userId = +params['id'];

      this.fetchRecruiterData();
    });
  }

  fetchRecruiterData() {
    this.recruiterService.getRecruiterById(this.userId).subscribe(
      (recruiter) => {
        // Set the form values with the fetched data
        this.editRecruiterForm.patchValue(recruiter);
      },
      (error) => {
        console.error('Error fetching recruiter data:', error);
      }
    );
  }

  OnSubmit() {
    if (this.editRecruiterForm.valid) {
      const recruiterData = this.editRecruiterForm.value;
      this.recruiterService.updateRecruiter(this.userId, recruiterData).subscribe(
        (response) => {
          console.log('Recruiter updated successfully:', response);
          // this.router.navigateByUrl('recruiter-home');
        },
        (error) => {
          console.error('Error updating recruiter:', error);
        }
      );
    }
  }}
