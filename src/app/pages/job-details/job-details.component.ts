import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { userProfiles } from 'src/app/data-type';
import { JobService } from 'src/app/service/job.service';

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.css']
})
export class JobDetailsComponent implements OnInit {
  job !:any;
  public id !: string| null ;
  userProfileForm :[]=[];

  jobApplicationsobj =
    {
      "jobListingId": 0,
      "jobSeekerId": 0,
      "applicationDate": "2023-07-31",
      "status": "string",
      "message": ""
    };
    // jobId : string |null =null ;
    // companyName: string | null = null;
  
  constructor(private _job :JobService,
    private route : ActivatedRoute,
    private router : Router){

    }

    ngOnInit():void{
      this.id = this.route.snapshot.paramMap.get('id');
      console.log("id details",this.id);
      this._job.getDataById(this.id).subscribe((data : any)=>{
        this.job = data;
        console.log("click more show detailedjobs");

      },
      (error)=>{
        console.log("Either the job does not exist or some error occurred");
      });
        }
    
    apply(id :any){
    console.log("for user Appleid !");
    this._job.getDataById(id).subscribe((data)=>{
      this.router.navigate(['/apply', id]);
    })
 
    // this._job.ApplyforJob(this.id,this.userProfileForm.values);
       }
    
}
  

