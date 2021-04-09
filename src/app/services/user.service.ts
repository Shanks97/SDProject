import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url: string = 'http://localhost:5000';

  constructor(private http: HttpClient) { }

  getUsers(){
    return this.http.get<any>(this.url + '/users');
  }

}
