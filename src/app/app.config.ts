import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getDatabase, provideDatabase } from '@angular/fire/database';
import { getFunctions, provideFunctions } from '@angular/fire/functions';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideFirebaseApp(() =>
      initializeApp({
        projectId: 'rx-works-is',
        appId: '1:85196578075:web:6cf37780415f9369d887be',
        storageBucket: 'rx-works-is.appspot.com',
        apiKey: 'AIzaSyDAKSGSnITZprurAOVdZ8oc8qOEp1JzzRI',
        authDomain: 'rx-works-is.firebaseapp.com',
        messagingSenderId: '85196578075',
      })
    ),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideDatabase(() => getDatabase()),
    provideFunctions(() => getFunctions()),
  ],
};
