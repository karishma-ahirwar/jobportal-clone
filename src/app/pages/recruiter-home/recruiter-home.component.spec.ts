import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecruiterHomeComponent } from './recruiter-home.component';

describe('RecruiterHomeComponent', () => {
  let component: RecruiterHomeComponent;
  let fixture: ComponentFixture<RecruiterHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecruiterHomeComponent]
    });
    fixture = TestBed.createComponent(RecruiterHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
