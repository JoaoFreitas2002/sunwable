import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolarModulesComponent } from './solar-modules.component';
import {HttpClientModule} from "@angular/common/http";

describe('SolarModulesComponent', () => {
  let component: SolarModulesComponent;
  let fixture: ComponentFixture<SolarModulesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule],
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
