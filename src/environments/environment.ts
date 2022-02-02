// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyB2jyGYUfpOJr3ib08Jj448qs76wRocOy8",
    authDomain: "myshop-5cebc.firebaseapp.com",
    databaseURL: "https://myshop-5cebc-default-rtdb.firebaseio.com/",
    projectId: "myshop-5cebc",
    storageBucket: "myshop-5cebc.appspot.com",
    messagingSenderId: "42018913921"    
  }
};
