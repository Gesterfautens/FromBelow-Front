import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { respHttp } from './respHttp';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private role: any;

  constructor(private http:HttpClient) { }

  setRole(role:String){
    this.role = role
  }

  login(user:any,pass:any){
      return this.http.post<String>("Http://localhost:8080/authenticate",{username:user,password:pass},
                {withCredentials: true})
  }

  signout(){
    return this.http.post<String>("http://localhost:8080/signout","",{withCredentials: true})
  }

  getUserRole(){
    return this.http.get<respHttp>("http://localhost:8080/getRole",{withCredentials: true})
  }
}
