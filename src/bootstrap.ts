//main entry point
import {HTTP_PROVIDERS,Http} from 'angular2/http';
import {ROUTER_PROVIDERS} from 'angular2/router';
import {bootstrap} from 'angular2/platform/browser';
import {ComponentRef,provide} from 'angular2/core';
import {App} from './app';
import {Auth} from './auth/auth';
import {appInjector} from './app-injector';
import {AuthHttp, AuthConfig} from 'angular2-jwt';
import 'rxjs/Rx';


bootstrap(App, [
  Auth,
  HTTP_PROVIDERS,
  ROUTER_PROVIDERS,
  provide(AuthHttp, {
	  useFactory: (http) => {
		  return new AuthHttp(new AuthConfig({
			  headerName: 'Authorization',
			  headerPrefix: 'JWT',
			  tokenName: 'jwt',
			  globalHeaders: [{ 'Content-Type': 'application/json' }],
			  noJwtError: false,
		  }), http);
	  },
	  deps: [Http]
  })

]).then((appRef: ComponentRef) => {
  // store a reference to the application injector
  appInjector(appRef.injector);
});