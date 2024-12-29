import { ApplicationConfig, importProvidersFrom, inject, provideAppInitializer } from '@angular/core';
import {provideRouter} from '@angular/router';
import {routes} from './app.routes';
import {provideClientHydration} from '@angular/platform-browser';
import {provideAnimationsAsync} from '@angular/platform-browser/animations/async';
import { provideHttpClient, withInterceptors } from "@angular/common/http";
import {IconRegistryService} from "./core/services/icon-registry.service";
import {apiKeyInterceptor} from "./core/interceptors/api-key.interceptor";
import {StubInstagramService} from "@app/share/services/stub-instagram.service";
import {IInstagramService, INSTAGRAM_SERVICE} from "@app/share/services/i-instagram.service";
import {environment} from "@environments/environment";
import {InstagramService} from "@app/share/services/instagram.service";




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
