import {APP_INITIALIZER, ApplicationConfig, importProvidersFrom, inject, LOCALE_ID} from '@angular/core';
import {provideRouter} from '@angular/router';
import {routes} from './app.routes';
import {provideClientHydration} from '@angular/platform-browser';
import {provideAnimationsAsync} from '@angular/platform-browser/animations/async';
import {provideHttpClient} from "@angular/common/http";
import {IconRegistryService} from "./core/services/icon-registry.service";
import {provideFirebaseApp, initializeApp} from "@angular/fire/app";
import {environment} from "../environments/environment.prod";
import {registerLocaleData} from "@angular/common";
import localeFr from '@angular/common/locales/fr';


registerLocaleData(localeFr);



export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(),
    provideAnimationsAsync(),
    provideHttpClient(),
    { provide: LOCALE_ID, useValue: 'fr' },
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
