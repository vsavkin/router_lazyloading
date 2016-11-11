// import polyfills
import 'core-js/es7/reflect'
import 'zone.js/dist/zone'

// import angular2 dpes
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {AppModule} from './app';

platformBrowserDynamic().bootstrapModule(AppModule);