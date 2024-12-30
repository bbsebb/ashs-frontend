import {ApplicationConfig, inject, provideAppInitializer} from '@angular/core';
import {provideRouter} from '@angular/router';
import {routes} from './app.routes';
import {provideClientHydration} from '@angular/platform-browser';
import {provideAnimationsAsync} from '@angular/platform-browser/animations/async';
import {provideHttpClient, withInterceptors} from "@angular/common/http";
import {IconRegistryService} from "./core/services/icon-registry.service";
import {apiKeyInterceptor} from "./core/interceptors/api-key.interceptor";
import {StubInstagramService} from "@app/share/services/stub-instagram.service";
import {INSTAGRAM_SERVICE} from "@app/share/services/i-instagram.service";
import {environment} from "@environments/environment";
import {InstagramService} from "@app/share/services/instagram.service";
import {COACH_SERVICE} from "@app/share/services/i-coach.service";
import {HALL_SERVICE} from "@app/share/services/i-hall.service";
import {TEAM_SERVICE} from "@app/share/services/i-team.service";
import {TRAINING_SESSION_SERVICE} from "@app/share/services/i-training-session.service";
import {CoachService} from "@app/share/services/coach.service";
import {HallService} from "@app/share/services/hall.service";
import {TeamService} from "@app/share/services/team.service";
import {TrainingSessionService} from "@app/share/services/training-session.service";


export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    {
      provide: INSTAGRAM_SERVICE,
      useFactory: () => {
        if(environment.production) {
          return inject(InstagramService);
        } else {
          return inject(StubInstagramService);
        }
      }
    },
    {provide: COACH_SERVICE, useFactory: () => inject(CoachService)},
    {provide: HALL_SERVICE, useFactory: () => inject(HallService)},
    {provide: TEAM_SERVICE, useFactory: () => inject(TeamService)},
    {provide: TRAINING_SESSION_SERVICE, useFactory: () => inject(TrainingSessionService)},

    provideClientHydration(),
    provideAnimationsAsync(),
    provideHttpClient(withInterceptors([apiKeyInterceptor])),
    provideAppInitializer(() => {
        const initializerFn = (() => {
      const iconRegistryService = inject(IconRegistryService);
      return () => iconRegistryService.registerIcons();
    })();
        return initializerFn();
      }),
    ]
};
