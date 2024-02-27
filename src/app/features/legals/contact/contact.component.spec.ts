import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactComponent } from './contact.component';
import {By} from "@angular/platform-browser";

describe('ContactComponent', () => {
  let component: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should create form with 3 controls', () => {
    expect(component.contactForm.contains('name')).toBeTruthy();
    expect(component.contactForm.contains('email')).toBeTruthy();
    expect(component.contactForm.contains('message')).toBeTruthy();
  });

  it('should make the name, email and message controls required', () => {
    let nameControl = component.contactForm.get('name');
    let emailControl = component.contactForm.get('email');
    let messageControl = component.contactForm.get('message');

    nameControl!.setValue('');
    emailControl!.setValue('');
    messageControl!.setValue('');

    expect(nameControl!.valid).toBeFalsy();
    expect(emailControl!.valid).toBeFalsy();
    expect(messageControl!.valid).toBeFalsy();
  });

  it('should validate the email field correctly', () => {
    let emailControl = component.contactForm.get('email');
    emailControl!.setValue('test@test.com');
    expect(emailControl!.valid).toBeTruthy();

    emailControl!.setValue('test'); // Test avec une valeur incorrecte
    expect(emailControl!.valid).toBeFalsy();
  });

  it('should not call the onSubmit method if the form is invalid', () => {
    const formSpy = spyOn(component, 'onSubmit');
    component.contactForm.controls['email'].setValue(''); // Mettre un champ dans un état invalide
    component.onSubmit();
    expect(formSpy).not.toHaveBeenCalled();
  });

  it('should call the onSubmit method if the form is valid', () => {
    const formSpy = spyOn(component, 'onSubmit').and.callThrough();
    component.contactForm.controls['name'].setValue('John Doe');
    component.contactForm.controls['email'].setValue('john.doe@example.com');
    component.contactForm.controls['message'].setValue('Hello, this is a test message.');
    component.onSubmit();
    expect(formSpy).toHaveBeenCalled();
  });

  it('should disable the submit button if the form is invalid', () => {
    component.contactForm.controls['email'].setValue(''); // Rend le formulaire invalide
    fixture.detectChanges(); // Déclenche la détection de changement pour mettre à jour le DOM
    const button = fixture.debugElement.query(By.css('button[type="submit"]')).nativeElement;
    expect(button.disabled).toBeTruthy();
  });

  it('should enable the submit button if the form is valid', () => {
    component.contactForm.controls['name'].setValue('John Doe');
    component.contactForm.controls['email'].setValue('john.doe@example.com');
    component.contactForm.controls['message'].setValue('Hello, this is a test message.');
    fixture.detectChanges(); // Déclenche la détection de changement pour mettre à jour le DOM
    const button = fixture.debugElement.query(By.css('button[type="submit"]')).nativeElement;
    expect(button.disabled).toBeFalsy();
  });


});
