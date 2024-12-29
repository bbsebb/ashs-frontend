import {Component, OnInit, signal, ViewChild, WritableSignal} from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  FormGroupDirective,
  FormsModule,
  ReactiveFormsModule,
  Validators
} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {MatCardModule} from "@angular/material/card";
import {ContactService} from "../services/contact.service";
import {MatProgressBar} from "@angular/material/progress-bar";
import {SnackBarService} from "../../../share/services/snack-bar.service";

@Component({
    selector: 'app-contact',
    imports: [
        ReactiveFormsModule,
        MatFormFieldModule, MatInputModule, FormsModule, MatButtonModule, MatCardModule, MatProgressBar
    ],
    templateUrl: './contact.component.html',
    styleUrl: './contact.component.scss'
})
export class ContactComponent implements OnInit{
  @ViewChild(FormGroupDirective, {static: false}) formGroupDirective!: FormGroupDirective;
  contactForm!: FormGroup;
  disabledSubmitButton: WritableSignal<boolean> = signal(true);
  showProgressBar: WritableSignal<boolean> = signal(false);

  constructor(private fb: FormBuilder,private contactService: ContactService,private snackBarService: SnackBarService) {

  }
  ngOnInit(): void {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
    });

    this.contactForm.statusChanges.subscribe(status => {
      this.disabledSubmitButton.set(!(status === 'VALID'));
    });
  }



  onSubmit() {
    if(this.contactForm.valid) {
      this.disabledSubmitButton.set(true);
      this.showProgressBar.set(true);
      // Envoi du formulaire
      this.contactService.sendContactForm(this.contactForm.value).subscribe(
      {
        next: () => {

          console.log('Formulaire envoyé');
        },
        error: () => {
          console.log('Erreur lors de l\'envoi du formulaire');
          this.snackBarService.open('Une erreur est survenue lors de l\'envoi du message','FERMER', 0);
          this.disabledSubmitButton.set(false);
          this.showProgressBar.set(false);
        },
        complete: () => {
          console.log('Envoi du formulaire terminé');
          this.snackBarService.open('Votre message a bien été envoyé');
          this.contactForm.reset();
          this.formGroupDirective.resetForm();
          this.disabledSubmitButton.set(false);
          this.showProgressBar.set(false);
        }
      });

    }
  }

  getFormControlErrorText(ctrl: AbstractControl): string {
    if(ctrl.hasError('required')) {
      return "Ce champ est obligatoire";
    } else if(ctrl.hasError('email')) {
      return "Adresse email invalide";
    } else {
      return "Ce champs contient une erreur";
    }
  }
}
