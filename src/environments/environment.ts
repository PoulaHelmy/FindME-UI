// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: true,
  apiRoot: 'http://127.0.0.1:8000/api/api',
  algolia: {
    appId: 'VNP1XYFNSF',
    apiKey: '43313045a7a3e98b65b0cb53cdc3cfcc',
    indexName: 'getstarted_actors',
    urlSync: false,
  },
  // pusher-angular-realtime-feed/server/variable.env
  pusher: {
    PUSHER_APP_ID: '1007567',
    PUSHER_APP_KEY: '30cfc6c3e71955413265',
    PUSHER_APP_SECRET: '9a040b29b43c4cbd234a',
    PUSHER_APP_CLUSTER: 'mt1',
    PUSHER_APP_SECURE: 1,
    channel: 'ng-chat',
    server: 'http://findme.test/api',
  },
  //Firebase Config Variables
  firebaseConfig: {
    apiKey: 'AIzaSyDa6fMm2z-MF5-Rb1rI--v_jYnJh1N_msQ',
    authDomain: 'findme-frontend.firebaseapp.com',
    databaseURL: 'https://findme-frontend.firebaseio.com',
    projectId: 'findme-frontend',
    storageBucket: 'findme-frontend.appspot.com',
    messagingSenderId: '127883493366',
    appId: '1:127883493366:web:f8905a57d6b74216ec91d7',
    measurementId: 'G-RPGCK49QK1',
  },
  azure: {
    endpoint: 'https://eastus.api.cognitive.microsoft.com/face/v1.0',
  },

  remoteConfig: false, // for performance don't load settings from remote
  firebase: {
    apiKey: 'AIzaSyDa6fMm2z-MF5-Rb1rI--v_jYnJh1N_msQ',
    authDomain: 'findme-frontend.firebaseapp.com',
    databaseURL: 'https://findme-frontend.firebaseio.com',
    projectId: 'findme-frontend',
    storageBucket: 'findme-frontend.appspot.com',
    messagingSenderId: '127883493366',
  },
  apiUrl: 'http://findme.test',
  tenant: 'findme',
  defaultLang: 'en',
  shemaVersion: '1',
};

/*
<!-- The core Firebase JS SDK is always required and must be listed first -->
<script src="/__/firebase/7.14.6/firebase-app.js"></script>

<!-- TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#available-libraries -->
<script src="/__/firebase/7.14.6/firebase-analytics.js"></script>

<!-- Initialize Firebase -->
<script src="/__/firebase/init.js"></script>
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
