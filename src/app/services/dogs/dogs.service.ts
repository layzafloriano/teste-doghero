import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DogsService {
  private serverUrl = environment.serverUrl;
  constructor(
    private httpClient : HttpClient,
  ) { }

  getDogs() {
    const urlRequest = `${this.serverUrl}/pets`;
    return this.httpClient.get<any>(urlRequest);
  }
}
