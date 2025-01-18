import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainCoachsComponent } from './main-coachs.component';

describe('MainCoachsComponent', () => {
  let component: MainCoachsComponent;
  let fixture: ComponentFixture<MainCoachsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainCoachsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainCoachsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
