import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { users } from '../data-type';
import { Router } from '@angular/router';
import { JobService } from './job.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private userService: JobService, private router: Router) {}

  // private apiUrl = 'http://localhost:3000';
  
  // login(username: string, password: string): void {
  //   this.userService.getUsers().subscribe((users) => {
  //     const user = users.find(u => u.username === username && u.password === password);

  //     if (user) {
  //       localStorage.setItem('currentUser', JSON.stringify(user));

  //       if (user.role === 'jobseeker') {
  //         localStorage.setItem('jobSeekerId', user.id.toString());
  //         this.router.navigate(['/job-listing']);
  //       } else if (user.role === 'recruiter') {
  //         localStorage.setItem('recruiterId', user.id.toString());
  //         this.router.navigate(['/recruiter-home']);
  //       }
  //     } else {
  //       console.log('Invalid username or password');
  //     }
  //   });
  // }

  // logout(): void {
  //   localStorage.removeItem('currentUser');
  //   localStorage.removeItem('jobSeekerId');
  //   localStorage.removeItem('recruiterId');
  //   this.router.navigate(['/login']);
  // }

  // getCurrentUser(): users | null {
  //   const userData = localStorage.getItem('currentUser');
  //   return userData ? JSON.parse(userData) : null;
  // }

  // isAuthenticated(): boolean {
  //   return !!this.getCurrentUser();
  // }

  // isJobSeeker(): boolean {
  //   const user = this.getCurrentUser();
  //   return user ? user.role === 'jobseeker' : false;
  // }

  // isRecruiter(): boolean {
  //   const user = this.getCurrentUser();
  //   return user ? user.role === 'recruiter' : false;
  // }


}
