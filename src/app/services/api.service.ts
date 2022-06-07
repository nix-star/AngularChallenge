import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Token, Credentials, Hero } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  accessToken: string = `10226371336324979`;
  urlToken: string = `http://challenge-react.alkemy.org/`;
  urlApi: string = `https://www.superheroapi.com/api.php/${this.accessToken}/`;

  constructor(private http: HttpClient) { }

  generateToken(credentials: Credentials): Observable<Token>{
    return this.http.post<Token>(this.urlToken, credentials);
  }

  getHeroById(id: number): Observable<Hero>{
    return this.http.get<Hero>(`${this.urlApi}${id}`);
  }
}
