import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
//import { httpInterceptorInterceptor } from './interceptor/http-interceptor-interceptor';
//import { errorInterceptorInterceptor } from './interceptor/error-interceptor-interceptor';



export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideHttpClient(),//withInterceptors([[httpInterceptorInterceptor,errorInterceptorInterceptor])])
    provideRouter(routes), 
    provideClientHydration(withEventReplay())
  ]
};


