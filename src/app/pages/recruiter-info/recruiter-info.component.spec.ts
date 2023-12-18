import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecruiterInfoComponent } from './recruiter-info.component';

describe('RecruiterInfoComponent', () => {
  let component: RecruiterInfoComponent;
  let fixture: ComponentFixture<RecruiterInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecruiterInfoComponent]
    });
    fixture = TestBed.createComponent(RecruiterInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
