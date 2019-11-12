import { Injectable } from '@angular/core';
import { environment } from '../environment/environment';
import { HttpClient } from '@angular/common/http';

const AUTH_TOKEN: 'AUTH_TOKEN';
const IS_AUTH: 'IS_AUTH';

@Injectable({
  providedIn: 'root'
})
export class OauthService {

  constructor(private httpClient: HttpClient,
    private sessionStorage: Storage) { }

  username: String;
  isAuthenticated: boolean;

  public verifyLogin(): boolean {
    return false;
  }

  public attemptLogin(username: String, password: String): boolean {
    if(this.verifyLogin()) return true;


  }

  public signUp(username: String, email: String, password:String): boolean {
    return false;
  }

  public logout() {
    this.username = null;
    this.isAuthenticated = false;
    this.sessionStorage.removeItem(AUTH_TOKEN);
    this.sessionStorage.setItem(IS_AUTH, 'False');
  }

  public async checkUsername(username:String): Promise<boolean> {

    await this.httpClient.get(environment.userServiceUrl + '').toPromise();
    return false;
  }
}
