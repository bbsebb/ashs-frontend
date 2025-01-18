import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainHallComponent } from './main-hall.component';

describe('MainHallComponent', () => {
  let component: MainHallComponent;
  let fixture: ComponentFixture<MainHallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainHallComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainHallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
