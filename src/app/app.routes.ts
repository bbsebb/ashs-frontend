import { Routes } from '@angular/router';
import {HomeComponent} from "./features/home/home.component";
import {MentionsLegalesComponent} from "./features/legals/mentions-legales/mentions-legales.component";
import {RgpdComponent} from "./features/legals/rgpd/rgpd.component";
import {ContactComponent} from "./features/legals/contact/contact.component";
import {MaintenanceComponent} from "./features/maintenance/maintenance.component";

export const routes: Routes = [
  { path: '', redirectTo: 'maintenance', pathMatch: 'full' },
  { path: 'maintenance', component: MaintenanceComponent},
  // { path: 'home', component: HomeComponent},
  { path: 'mentions-legales', component: MentionsLegalesComponent},
  { path: 'rgpd', component: RgpdComponent},
  // { path: 'contact', component: ContactComponent},
  { path: '**', redirectTo: 'maintenance' }
];
