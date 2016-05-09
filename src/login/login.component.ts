import {Component} from 'angular2/core';
import {Auth} from './../auth/auth.ts';
import {RouteParams, Router} from 'angular2/router';
import {Response} from 'angular2/http';

@Component({
  selector: 'login',
  template: `
    Logged in: {{ _auth.loggedIn }}<br>
    <button (click)="login(true)">Login good</button>
    <button (click)="login(false)">Login bad</button>    
    <button (click)="logout()">Logout</button>
  `
})
export class Login {
  private _linkParamsArray;
  constructor(private _auth: Auth,private _routeParams: RouteParams,private _router: Router) {
    this._linkParamsArray = _routeParams.get('linkParamsArray');
    if(this._linkParamsArray == null){
      this._linkParamsArray = ['Home'];
    }
  }

  login(bool : boolean) {
    this._auth.login(bool)
    .then(response =>{
      this._router.navigate(this._linkParamsArray);  
    })
    .catch(this._handleError);    
  }

  logout() {
    this._auth.logout();
    this._router.navigate(['Home']);
  }

  private _handleError (error: any) {
    // In a real world app, we might send the error to remote logging infrastructure
    let errMsg = error.message || 'Server error';
    console.error(errMsg); // log to console instead
    return Promise.reject(errMsg);
  }
}