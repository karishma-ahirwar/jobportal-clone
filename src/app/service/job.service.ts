import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';
import { userProfiles, users,JobSeeker,recruiters, jobApplications } from '../data-type';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, catchError, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class JobService {
  authenticated: any;

  // submitJobApplication(applicationData: { jobListingId: string | null; jobSeekerId: any; applicationDate: string; status: string; message: string; name: any; resume: any; }) {
  //   throw new Error('Method not implemented.');
  // }
  constructor(private http: HttpClient, private router :Router) { }

  api = 'http://localhost:3000';


  getUsers(): Observable<any[]> {
    return this.http.get<any[]>(`${this.api}/users`);
  }

  registerUser(userData: any): Observable<any> {
        return this.http.post<any>(`${this.api}/users`, userData);
  }

  getdataSeeker(){
    return this.http.get(`${this.api}/jobListings`);
  }

  postRecruiter(data:recruiters){
    return this.http.post(this.api+`/recruiters`,data);
  }
  
  getRecruiterById(userId:recruiters){
    return this.http.get(this.api+`/recruiters?userId=${userId}`);
  }
 updateRecruiter(userId:any ,recruiterData: any){
  console.log("edited data ",recruiterData);
  return this.http.put(this.api+`/recruiters/${userId}`,recruiterData);
 }
  CreateNewjobData(data : any){
    return this.http.post<any>(`${this.api}/jobListings`,data);
  }

  getDataById(id:any){
    return this.http.get(this.api+`/jobListings/${id}`);
  }
  getDataByUserID(userId:any){
    return this.http.get<any[]>(`${this.api}/jobListings?userId=${userId}`);
  }
  deleteRecruiterPost(id :any){
    return this.http.delete(this.api+`/jobListings/${id}`);
  }

  getUserProfilesById(userId:any): Observable<any[]> {
    return this.http.get<any[]>(`${this.api}/userProfiles/${userId}`);
  }
  
  postUserProfile(userData:any): Observable<any> {
    return this.http.post<any>(this.api+"/userProfiles",userData)
    .pipe(
      catchError((error)=>{
        console.log('Error posting userProfile ',error);
        return throwError(error);
      })
      
    );
  }
  
  submitJobApplications(jobSeekerId: string, jobListingId: string,applicationData: any): Observable<any> {
    const url = `${this.api}/jobApplications`; 
    return this.http.post(url, applicationData);
  }

  applyForJob(id: string,jobseekerId : number, applicationData: any): Observable<any> {
    // const applyUrl = `${this.api}/jobApplications`;
    const userId = localStorage.getItem('userId');
    const applyUrl = `${this.api}/jobListings/${id}/apply?id=${userId}`;
    return this.http.post<any>(applyUrl, applicationData);
  }
  
  getJobApplications(): Observable<jobApplications[]> {
    return this.http.get<jobApplications[]>(`${this.api}/jobApplications`);
  }








// getJobDetails(id: string): Observable<any> {
  //   const url = `${this.api}/job-detail/${id}`; 
  //   return this.http.get(url);
  // }
  // getUsers(): Observable<users[]> {
  //   return this.http.get<users[]>(`${this.api}/users`);
  // }
  // getUserProfile(){
  //   return this.http.get(this.api+"/userProfiles");
  // }
}












// login(loginData: { email?: string; password: string; role: string }): Observable<any> {
//   const url = `${this.api}/users`;

//   let payload: any;
//   if (loginData.email) {
//     payload = { email: loginData.email ,password: loginData.password };
    
//      payload.role = loginData.role;
//   } else {
//     payload = { password: loginData.password };
//   }
//   payload.role = loginData.role;

//   return this.http.post<any>(url, payload);
// }