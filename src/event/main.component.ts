import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {EventList} from './list.component.ts';

@Component({
	selector: 'event',
	template: `
    <router-outlet></router-outlet>
  `,
	directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
		{ path: '/', component: EventList, name: 'EventList', useAsDefault: true }
])

export class Event {

}