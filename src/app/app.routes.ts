import {Routes} from '@angular/router';
import {HomeComponent} from "./features/home/home.component";
import {MentionsLegalesComponent} from "./features/legals/mentions-legales/mentions-legales.component";
import {RgpdComponent} from "./features/legals/rgpd/rgpd.component";
import {ContactComponent} from "./features/legals/contact/contact.component";
import {MainCoachsComponent} from "@app/features/coachs/components/main-coaches/main-coachs.component";
import {MainTeamsComponent} from "@app/features/teams/components/main-teams/main-teams.component";
import {
  MainTrainingSessionComponent
} from "@app/features/training-session/components/main-training-session/main-training-session.component";
import {MainHallComponent} from "@app/features/halls/components/main-hall/main-hall.component";

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent},
  { path: 'mentions-legales', component: MentionsLegalesComponent},
  { path: 'rgpd', component: RgpdComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'coaches', component: MainCoachsComponent},
  { path: 'halls', component: MainHallComponent},
  { path: 'teams', component: MainTeamsComponent},
  { path: 'training-sessions', component: MainTrainingSessionComponent},
  { path: '**', redirectTo: 'home' }
];
