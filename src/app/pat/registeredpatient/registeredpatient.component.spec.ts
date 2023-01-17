import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisteredpatientComponent } from './registeredpatient.component';

describe('RegisteredpatientComponent', () => {
  let component: RegisteredpatientComponent;
  let fixture: ComponentFixture<RegisteredpatientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisteredpatientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisteredpatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
