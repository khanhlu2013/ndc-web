import {Component,OnInit} from 'angular2/core';
import {login} from './../login/login_util';
import {CanActivate, ComponentInstruction} from 'angular2/router';
import {MemberDaoService} from './dao';
import {Member} from './model';
@Component({
	template: `
    <h1>this is member list</h1>
    <ul>
      <li *ngFor="let member of _members">
        <span>{{member.id}}</span> {{member.full_name}}
      </li>
    </ul>    
  `
})
// @CanActivate((next: ComponentInstruction, previous: ComponentInstruction) => {
// 	var linkParamsArray = ['Member', 'MemberList']
// 	return login(next, previous, linkParamsArray);
// })
export class MemberList implements OnInit{
	private _members: Member[];
	constructor(private _dao: MemberDaoService){

	}

	ngOnInit(){
		this.getMembers();
	}

	getMembers(){
		this._dao.get_member_lst().then(
			members => this._members = members,
			reason => alert(reason)
		);
	}
}