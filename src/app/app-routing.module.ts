import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { registerLocaleData } from '@angular/common';
import { RegisterComponent } from './pages/register/register.component';
import { JobListingComponent } from './pages/job-listing/job-listing.component';
import { JobDetailsComponent } from './pages/job-details/job-details.component';
import { CreateNewJobComponent } from './pages/create-new-job/create-new-job.component';
import { RecruiterHomeComponent } from './pages/recruiter-home/recruiter-home.component';
import { UserprofileComponent } from './pages/userprofile/userprofile.component';
import { EdituserComponent } from './pages/edituser/edituser.component';
import { JobApplicationComponent } from './pages/job-application/job-application.component';
import { RecruiterInfoComponent } from './pages/recruiter-info/recruiter-info.component';
import { AppliedJobSeekerComponent } from './pages/applied-job-seeker/applied-job-seeker.component';
import { RecProfileComponent } from './pages/rec-profile/rec-profile.component';
import { UserDetailsComponent } from './pages/user-details/user-details.component';
import { EditRecruiterComponent } from './pages/edit-recruiter/edit-recruiter.component';
import { authGuardGuard } from './auth-guard.guard';

const routes: Routes = [
  {
    path: '', redirectTo: 'home', pathMatch: 'full'
  },
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'register', component: RegisterComponent
  },
  {
    path: 'user-profile', component: UserprofileComponent
  },
  {
    path: 'user-details', component: UserDetailsComponent
  },
  {
    path: 'job-listing', component: JobListingComponent , //canActivate: [authGuardGuard], data: { roles: ['jobseeker'] }
  },
  {
    path: 'job-detail/:id', component: JobDetailsComponent
  },
  {
    path: 'new-job', component: CreateNewJobComponent
  },
  {
    path: 'edituser/:id', component: EdituserComponent
  },
  {
    path: 'recruiter-home', component: RecruiterHomeComponent ,// canActivate: [authGuardGuard],// data: { roles: ['recruiter'] }
  },
  {
    path: 'recruiter-info', component: RecruiterInfoComponent
  },
  {
    path: 'recruiter-Detail', component: RecProfileComponent
  },
  {
    path: 'edit-recruiter/:id', component: EditRecruiterComponent
  },
  {
    path: 'applied-job-seeker', component: AppliedJobSeekerComponent
  },
  {
    path: 'apply/:id', component: JobApplicationComponent
  },
  {
    path: '**', component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
