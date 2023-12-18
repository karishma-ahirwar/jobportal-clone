import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecProfileComponent } from './rec-profile.component';

describe('RecProfileComponent', () => {
  let component: RecProfileComponent;
  let fixture: ComponentFixture<RecProfileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecProfileComponent]
    });
    fixture = TestBed.createComponent(RecProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
