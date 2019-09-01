import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { ILoginInput, ILoginOutput } from 'src/app/interfaces/login.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private serverUrl = environment.serverUrl;
  private accessToken = environment.accessToken;

  constructor(
    private httpClient : HttpClient
  ) { }

  login(user: ILoginInput): Observable<ILoginOutput> {
    const urlRequest = `${this.serverUrl}/auth?access_token=${this.accessToken}`;
    const loginAuthorization = btoa(`${user.email}:${user.password}`);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Basic ${loginAuthorization}`,
      })
    }
    return this.httpClient.post<ILoginOutput>(urlRequest, {}, httpOptions);
  }
}
