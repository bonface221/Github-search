import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Repos } from './repos';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  baseUrl: string = environment.apiUrl;
  

  constructor(private http: HttpClient) { }
  
  getRepos(userName:string): Observable<Repos[]>{
    return this.http.get<Repos[]>(this.baseUrl + 'users/' + userName + '/repos');
  }

 

}
