import {APP_INITIALIZER, ApplicationConfig, importProvidersFrom, inject} from '@angular/core';
import {provideRouter} from '@angular/router';
import {routes} from './app.routes';
import {provideClientHydration} from '@angular/platform-browser';
import {provideAnimationsAsync} from '@angular/platform-browser/animations/async';
import {provideHttpClient} from "@angular/common/http";
import {IconRegistryService} from "./core/services/icon-registry.service";
import {provideFirebaseApp, initializeApp} from "@angular/fire/app";
import {environment} from "../environments/environment";




export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(),
    provideAnimationsAsync(),
    provideHttpClient(),
    { provide: APP_INITIALIZER,
    useFactory: () => {
      const iconRegistryService = inject(IconRegistryService);
      return () => iconRegistryService.registerIcons();
    },
    multi: true
    },
    importProvidersFrom(provideFirebaseApp(() => initializeApp(environment.firebaseConfig))),
    ]
};
