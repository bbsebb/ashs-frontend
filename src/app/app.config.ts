import {APP_INITIALIZER, ApplicationConfig, importProvidersFrom, inject} from '@angular/core';
import {provideRouter} from '@angular/router';
import {routes} from './app.routes';
import {provideClientHydration} from '@angular/platform-browser';
import {provideAnimationsAsync} from '@angular/platform-browser/animations/async';
import {provideHttpClient, withInterceptors} from "@angular/common/http";
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
    { provide: APP_INITIALIZER,
    useFactory: () => {
      const iconRegistryService = inject(IconRegistryService);
      return () => iconRegistryService.registerIcons();
    },
    multi: true
    },
    importProvidersFrom(provideFirebaseApp(() => initializeApp(environment.firebaseConfig))), importProvidersFrom(provideFirebaseApp(() => initializeApp({"projectId":"ashs-e1731","appId":"1:732036285378:web:d42053063adc140ca70c5b","storageBucket":"ashs-e1731.appspot.com","apiKey":"AIzaSyCHH5vJK_vSUFK0hPrmwD8e1fdmUo2V6Mg","authDomain":"ashs-e1731.firebaseapp.com","messagingSenderId":"732036285378","measurementId":"G-71RWDS4RZP"}))), importProvidersFrom(provideAuth(() => getAuth())),
    ]
};
