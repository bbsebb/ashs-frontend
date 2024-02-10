import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import {SidenavOpeningService} from "../../services/sidenav-opening.service";
import {By} from "@angular/platform-browser";

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let service: SidenavOpeningService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderComponent],
      providers: [ SidenavOpeningService ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(SidenavOpeningService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should toggle isOpen on click', () => {
    spyOn(service, 'toggle');
    fixture.debugElement.query(By.css('#navbar-toggle-button')).triggerEventHandler('click', null);
    expect(service.toggle).toHaveBeenCalled();
  });
});
