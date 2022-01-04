import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { ResponseCode } from 'src/app/enums/responseCode';
import { ResponseModel } from 'src/app/models/responseModel';
import { User } from 'src/app/models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private readonly _baseUrl: string = "https://localhost:44332/api/User/";

  constructor(private httpClient: HttpClient) { }

  public Login(email: string, password: string){
    const body = {
      Email: email,
      Password: password
    }

    return this.httpClient.post<ResponseModel>(this._baseUrl+"Login", body);
  }

  public Register(fullname: string, email: string, password: string){
    const body = {
      Fullname: fullname,
      Email: email,
      Password: password
    }

    return this.httpClient.post<ResponseModel>(this._baseUrl+"RegisterUser", body);
  }

  public getAllUser(){
    let userInfo = JSON.parse(localStorage.getItem("userSession"));
    const headers = new HttpHeaders({
      'Authorization':`Bearer ${userInfo?.token}`
    });

    return this.httpClient.get<ResponseModel>(this._baseUrl+"GetAllUser", {headers:headers}).pipe(
      map(
        res => {
          let userList= new Array<User>();
          if(res.responseCode == ResponseCode.Ok){
            if(res.dataSet){
              res.dataSet.map((x: User) => {
                userList.push(new User(x.fullName, x.email, x.userName));
              })
            }
          }
          return userList;
        }
      )
    );
  }
}
