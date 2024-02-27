import { Routes } from '@angular/router';
import {HomeComponent} from "./features/home/home.component";
import {MentionsLegalesComponent} from "./features/legals/mentions-legales/mentions-legales.component";
import {RgpdComponent} from "./features/legals/rgpd/rgpd.component";
import {ContactComponent} from "./features/legals/contact/contact.component";

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent},
  { path: 'mentions-legales', component: MentionsLegalesComponent},
  { path: 'rgpd', component: RgpdComponent},
  { path: 'contact', component: ContactComponent},
  { path: '**', redirectTo: 'home' }
];
