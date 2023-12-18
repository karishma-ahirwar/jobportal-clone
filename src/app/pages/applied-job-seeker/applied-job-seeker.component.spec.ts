import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppliedJobSeekerComponent } from './applied-job-seeker.component';

describe('AppliedJobSeekerComponent', () => {
  let component: AppliedJobSeekerComponent;
  let fixture: ComponentFixture<AppliedJobSeekerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppliedJobSeekerComponent]
    });
    fixture = TestBed.createComponent(AppliedJobSeekerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
