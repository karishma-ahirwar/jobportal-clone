import { Component, OnInit } from '@angular/core';
import { Observable, map } from 'rxjs';
import { JobService } from 'src/app/service/job.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // searchData$: Observable<any[]> | undefined;
  jobListings: any[] = [];
  searchTerm: string = '';
  filteredJobListings: any[] = [];


  constructor( private dataService :JobService){}

  ngOnInit(): void {
    const userId = localStorage.getItem('currentUser');
    if (userId !== null) {
      this.dataService.getDataByUserID(userId).subscribe(
        (data) => {
          this.jobListings = data;
          this.filteredJobListings = this.jobListings;
        },
        (error) => {
          console.error('Error fetching job listings:', error);
        }
      );
    }
  }
  onSearchInputChange(event: any): void {
    this.searchTerm = event.target.value;
    this.filterJobs();
  }
 
  search(): void {
    this.filterJobs();
  }
 
  filterJobs(): void {
    this.filteredJobListings.forEach((job) => {
      const txtValue = `${job.title} ${job.company} ${job.location}`.toUpperCase();
      job.hidden = !(txtValue.includes(this.searchTerm.toUpperCase()));
    });
  }
}
