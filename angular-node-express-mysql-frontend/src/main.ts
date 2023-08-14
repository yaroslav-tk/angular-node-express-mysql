/// <reference types="@angular/localize" />

// import { LOCALE_ID } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
// import { registerLocaleData } from '@angular/common';
// import localeEn from '@angular/common/locales/en';
// import localeUk from '@angular/common/locales/uk';

// registerLocaleData(localeEn, 'en-US');
// registerLocaleData(localeUk, 'uk-UA');


platformBrowserDynamic().bootstrapModule(AppModule, {
  // providers: [{provide: LOCALE_ID, useValue: 'en-US' }]
}).catch(err => console.error(err));
