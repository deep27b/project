// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { ApplicationInitStatus } from "@angular/core";

export const environment = {
  production: false,
  appointmentListEndPoint : 'http://127.0.0.1:8000/api/list',
  adminEndPoints:'http://localhost/api/admin.php',
  loginendpoints:'http://127.0.0.1:8000/api/login',
  emailupdateendpoints:'http://127.0.0.1:8000/api/emailupdate/',  
  addpatientendpoints:'http://127.0.0.1:8000/api/registerPatient',
  updatepatientendpoints:'http://127.0.0.1:8000/api/updatePatient',
  registeredpatientendpoints:'http://127.0.0.1:8000/api/listRegisteredPatients',
  geteditPatientendpoints:'http://127.0.0.1:8000/api/',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
