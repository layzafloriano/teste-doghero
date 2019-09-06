import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { ILoginInput, ILoginOutput } from 'src/app/interfaces/login.interface';
import { Observable } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import { jwtTokenGetter } from 'src/app/helpers/token';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private serverUrl = environment.serverUrl;

  constructor(
    private httpClient : HttpClient,
    public jwtHelper: JwtHelperService
  ) { }

  login(user: ILoginInput): Observable<ILoginOutput> {
    const urlRequest = `${this.serverUrl}/auth`;
    const loginAuthorization = btoa(`${user.email}:${user.password}`);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Basic ${loginAuthorization}`,
      })
    };
    return this.httpClient.post<ILoginOutput>(urlRequest, {}, httpOptions);
  }

  // signup() {
  //   const urlRequest = `${this.serverUrl}/user`;
  //   const loginAuthorization = btoa(`${user.email}:${user.password}`);
  //   const httpOptions = {
  //     headers: new HttpHeaders({
  //       'Content-Type': 'application/json',
  //       'Authorization': `Basic ${loginAuthorization}`,
  //     })
  //   };
  //   return this.httpClient.post<ILoginOutput>(urlRequest, {}, httpOptions);
  // }

  isAuthenticated(): boolean {
    const token = jwtTokenGetter();
    return !this.jwtHelper.isTokenExpired(token);
  }
}
