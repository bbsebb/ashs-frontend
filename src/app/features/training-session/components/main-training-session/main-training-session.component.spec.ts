import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainTrainingSessionComponent } from './main-training-session.component';

describe('MainTrainingSessionComponent', () => {
  let component: MainTrainingSessionComponent;
  let fixture: ComponentFixture<MainTrainingSessionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainTrainingSessionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainTrainingSessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
