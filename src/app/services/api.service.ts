import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { BehaviorSubject, Observable, map } from 'rxjs';
import { Token, Credentials } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  urlToken: string = "http://challenge-react.alkemy.org/"

  constructor(private http: HttpClient) { }

  getToken(credentials: Credentials): Observable<Token>{
    return this.http.post<Token>(this.urlToken, credentials);
  }
}
