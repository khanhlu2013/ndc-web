import {Observable} from 'rxjs/Observable';
import {Http, Headers, RequestOptions} from 'angular2/http';
import {Injectable} from 'angular2/core';
import { AuthHttp } from 'angular2-jwt';

@Injectable()
export class Auth {
  private _tokenKey: string;
  private _loginUrl = 'http://127.0.0.1:8000/api-token-auth/'

  constructor(private _http: Http, private _authHttp: AuthHttp) {
    this._tokenKey = _authHttp._config.tokenName;
  }

  public login(bool: boolean) {
    let data = {
      username : (bool? 'lu' : 'bad_guy'),
      password : '_Mother3169_'
    }

    let body = JSON.stringify(data);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });    

    return new Promise((resolve,reject) =>{
      this._http.post(this._loginUrl, body, options)
        .toPromise()
        .then(
          response =>{
            if (response.status < 200 || response.status >= 300) {
              throw new Error('Bad response status: ' + response.status);
            } else {
              this._setJwt(response.json().token);
              resolve(true);
            }     
          },
          reason =>{
            reject(reason);
          }
        )
    })
  }

  public logout() {
    this._removeJwt();
  }

  public check() {
    let jwt = this.getJwt();
    return Observable.of(jwt!=null);
  }
  
  public getJwt() {
    return localStorage.getItem(this._tokenKey);
  }

  private _setJwt(jwt){
    localStorage.setItem(this._tokenKey, jwt);
  }

  private _removeJwt(){
    localStorage.removeItem(this._tokenKey);
  }



}