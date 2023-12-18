import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import {MatCardModule} from '@angular/material/card';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { JobListingComponent } from './pages/job-listing/job-listing.component';
import { JobDetailsComponent } from './pages/job-details/job-details.component';
import { HomeComponent } from './pages/home/home.component';
import { CreateNewJobComponent } from './pages/create-new-job/create-new-job.component';
import { RecruiterHomeComponent } from './pages/recruiter-home/recruiter-home.component';
import { UserprofileComponent } from './pages/userprofile/userprofile.component';
import { EdituserComponent } from './pages/edituser/edituser.component';
import { JobApplicationComponent } from './pages/job-application/job-application.component';
import { RecruiterInfoComponent } from './pages/recruiter-info/recruiter-info.component';
import { AppliedJobSeekerComponent } from './pages/applied-job-seeker/applied-job-seeker.component';
import { RecProfileComponent } from './pages/rec-profile/rec-profile.component';
import { UserDetailsComponent } from './pages/user-details/user-details.component';
import { EditRecruiterComponent } from './pages/edit-recruiter/edit-recruiter.component'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    JobListingComponent,
    JobDetailsComponent,
    HomeComponent,
    CreateNewJobComponent,
    RecruiterHomeComponent,
    UserprofileComponent,
    EdituserComponent,
    JobApplicationComponent,
    RecruiterInfoComponent,
    AppliedJobSeekerComponent,
    RecProfileComponent,
    UserDetailsComponent,
    EditRecruiterComponent
  ],
  imports: [
    BrowserModule,
    // MatCardModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
