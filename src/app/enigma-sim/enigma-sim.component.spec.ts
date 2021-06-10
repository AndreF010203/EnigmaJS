import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnigmaSimComponent } from './enigma-sim.component';

describe('EnigmaSimComponent', () => {
  let component: EnigmaSimComponent;
  let fixture: ComponentFixture<EnigmaSimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnigmaSimComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnigmaSimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
