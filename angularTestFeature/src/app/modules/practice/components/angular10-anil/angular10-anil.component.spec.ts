import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Angular10AnilComponent } from './angular10-anil.component';

describe('Angular10AnilComponent', () => {
  let component: Angular10AnilComponent;
  let fixture: ComponentFixture<Angular10AnilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Angular10AnilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Angular10AnilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
