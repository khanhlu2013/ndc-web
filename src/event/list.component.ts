import {Component} from 'angular2/core';
import {login} from './../login/login_util';
import {CanActivate, ComponentInstruction} from 'angular2/router';

@Component({
	template: `
    this is eventsss list
  `
})
@CanActivate((next: ComponentInstruction, previous: ComponentInstruction) => {
		var linkParamsArray = ['Event', 'EventList']
		return login(next, previous, linkParamsArray);
})
export class EventList {

}