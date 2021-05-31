import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AteendanceComponent } from './ateendance.component';

describe('AteendanceComponent', () => {
  let component: AteendanceComponent;
  let fixture: ComponentFixture<AteendanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AteendanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AteendanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
