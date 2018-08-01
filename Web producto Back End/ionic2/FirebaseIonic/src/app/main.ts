import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app.module';
import { firebaseconfig } from '../enviroments/firebase-config'
import * as firebase from 'firebase/app';

firebase.initializeApp(firebaseconfig);


platformBrowserDynamic().bootstrapModule(AppModule);
