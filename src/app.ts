//our root app component
import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteConfig} from 'angular2/router';
import {Home} from './home.component.ts';
import {Login} from './login/login.component.ts';
import {Event} from './event/main.component.ts';
import {Member} from './member/main.component.ts';

@Component({
  selector: 'app',
  template: `
    <a [routerLink]="['/Home']">Home</a><br/>
    <a [routerLink]="['/Member']">Member</a><br/>
    <a [routerLink]="['/Event']">Event</a><br/>
    <a [routerLink]="['/Login']">Login</a><br/>
    <br/>
    
    <router-outlet></router-outlet>  
  `,
  directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
  { path: '/', component: Home, name: 'Home' },
  { path: '/login', component: Login, name: 'Login' },
  { path: '/member/...', component: Member, name: 'Member' },
  { path: '/event/...', component: Event, name: 'Event' }
])
export class App {
}