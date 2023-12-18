import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditRecruiterComponent } from './edit-recruiter.component';

describe('EditRecruiterComponent', () => {
  let component: EditRecruiterComponent;
  let fixture: ComponentFixture<EditRecruiterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditRecruiterComponent]
    });
    fixture = TestBed.createComponent(EditRecruiterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
