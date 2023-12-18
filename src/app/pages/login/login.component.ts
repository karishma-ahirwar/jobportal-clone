import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { recruiters, users } from 'src/app/data-type';
import { AuthService } from 'src/app/service/auth.service';
import { JobService } from 'src/app/service/job.service';
import { CookieService } from 'ngx-cookie-service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder, 
    private  authService: AuthService , 
    private  userService:JobService,
    private router: Router) {

    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  login(): void {
    if (this.loginForm.valid) {
      const { username, password } = this.loginForm.value;
      // this.authService.login(username, password);
      
      this.userService.getUsers().subscribe((users) => {
        const user = users.find(u => u.username === username && u.password === password);

        if (user) {
          // Store user data in local storage(user.id)
          localStorage.setItem('currentUser', JSON.stringify(user));
          
          if (user.role === 'jobseeker') {
            localStorage.setItem('jobSeekerId', user.id.toString());
            this.router.navigate(['/job-listing']);
            this.loginForm.reset();
          } 
          else if (user.role === 'recruiter') {
            localStorage.setItem('recruiterId', user.id.toString());
            this.router.navigate(['/recruiter-home']);
          }
        } else {
          console.log('Invalid username or password');
        }
      });
 
    }
  }
}