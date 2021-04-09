import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../classes/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url: string = 'http://localhost:5000';

  constructor(private http: HttpClient) { }

  getUsers(){
    return this.http.get<User[]>(this.url + '/User');
  }

}
