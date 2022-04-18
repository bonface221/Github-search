import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { Users } from './users';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProfileRequestService {
  fromUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getUsers(userName: string): Observable<Users[]> {
    return this.http.get<Users[]>(this.fromUrl + 'users/' + userName);
  }

  
}
