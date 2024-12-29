import { ApplicationConfig, importProvidersFrom, inject, provideAppInitializer } from '@angular/core';
import {provideRouter} from '@angular/router';
import {routes} from './app.routes';
import {provideClientHydration} from '@angular/platform-browser';
import {provideAnimationsAsync} from '@angular/platform-browser/animations/async';
import { provideHttpClient, withInterceptors } from "@angular/common/http";
import {IconRegistryService} from "./core/services/icon-registry.service";
import {provideFirebaseApp, initializeApp} from "@angular/fire/app";
import {environment} from "../environments/environment";
import { getAuth, provideAuth } from '@angular/fire/auth';
import {apiKeyInterceptor} from "./core/interceptors/api-key.interceptor";




export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
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
    importProvidersFrom(provideAuth(() => getAuth())),
    ]
};
