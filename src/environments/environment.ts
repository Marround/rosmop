// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyAXqG7OT_acAru5AgrlI7cHy07lx2c_Y2k',
    authDomain: 'rosmop-auth.firebaseapp.com',
    databaseURL: 'https://rosmop-auth.firebaseio.com',
    projectId: 'rosmop-auth',
    storageBucket: 'rosmop-auth.appspot.com',
    messagingSenderId: '1084530601084'

  }
};
