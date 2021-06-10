import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RotorConfigComponent } from './rotor-config.component';

describe('RotorConfigComponent', () => {
  let component: RotorConfigComponent;
  let fixture: ComponentFixture<RotorConfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RotorConfigComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RotorConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
