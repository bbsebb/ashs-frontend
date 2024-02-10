import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SidenavComponent } from './sidenav.component';
import {SidenavOpeningService} from "../../services/sidenav-opening.service";
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatSidenavModule} from "@angular/material/sidenav";


describe('SidenavComponent', () => {
  let component: SidenavComponent;
  let fixture: ComponentFixture<SidenavComponent>;
  let mockService: jasmine.SpyObj<SidenavOpeningService> = jasmine.createSpyObj('SidenavOpeningService', ['isOpen', 'toggle']);


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SidenavComponent,MatSidenavModule, NoopAnimationsModule],
      providers: [{ provide: SidenavOpeningService, useValue: mockService }]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidenavComponent);
    component = fixture.componentInstance;
    mockService.isOpen.and.returnValue(true);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should update "opened" based on SidenavOpeningService', () => {
    expect(component.opened).toBeTrue();
  });
});
