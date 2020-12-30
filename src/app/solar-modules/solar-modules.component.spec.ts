import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolarModulesComponent } from './solar-modules.component';

describe('SolarModulesComponent', () => {
  let component: SolarModulesComponent;
  let fixture: ComponentFixture<SolarModulesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolarModulesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SolarModulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
