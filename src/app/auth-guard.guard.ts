import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { JobService } from './service/job.service';
import { inject } from '@angular/core';
import { AuthService } from './service/auth.service';

const router = new Router();
export const authGuardGuard: CanActivateFn = (route: ActivatedRouteSnapshot
  , state: RouterStateSnapshot) => {
   const token= localStorage.getItem('currentUser');
   const jobseeker = localStorage.getItem('jobSeekerId');
   if(token){
return true;
   }
   else if(jobseeker){
router.navigateByUrl('job-listing');
return true;
   }
   else{
router.navigateByUrl('/');
return false;
   }
   

   


    // return true;
  // Inject AuthService and Router services
  // const authService = inject(AuthService);
  // const router = inject(Router);

  // Check user authentication and role
  // const isAuthenticated = authService.isAuthenticated();
  // const isrecruiter = authService.isRecruiter();
  // const isjobSeeker = authService.isJobSeeker();
  // const user = authService.getCurrentUser(); // Use your method to get current user

  // console.log('isAuthenticated - ', isAuthenticated);
  // console.log('isrecruiter - ', isrecruiter);
  // console.log('isjobSeeker - ', isjobSeeker);
  // console.log('user - ', user);
  
  // // Decide access based on combined status
  // if (!isAuthenticated || !user) {
  //   router.navigate(['/login']);
  //   //  console.log("isjobSeeker",isjobSeeker);
  //   return true;
  // }
  // else if (isjobSeeker || (user) && route.data['roles'].includes('jobseeker')) {
  //   console.log("isjobSeeker", isjobSeeker);
  //   router.navigate(['/job-listing']);
  //   return true;
  // }
  // else if (isrecruiter || (user) && !route.data['roles'].includes('recruiter')) {
  //   console.log("isrecruiter", isrecruiter);
  //   router.navigate(['/recruiter-home']);
  //   return true;
  // }
  // else {
  //   console.log("authentication")
  //   return true;
  // }

};
