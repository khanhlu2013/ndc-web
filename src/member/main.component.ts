import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {MemberList} from './list.component.ts';
import {MemberDaoService} from './dao';

@Component({
	selector: 'event',
	template: `
    <router-outlet></router-outlet>
  `,
	directives: [ROUTER_DIRECTIVES],
	providers: [MemberDaoService]
})
@RouteConfig([
		{ path: '/', component: MemberList, name: 'MemberList', useAsDefault: true }
])

export class Member {

}