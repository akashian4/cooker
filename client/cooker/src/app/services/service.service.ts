import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { BehaviorSubject, Observable } from "rxjs";
import { map } from "rxjs/operators";
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;
  httpOptions: any;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(
      JSON.parse(localStorage.getItem("currentUser"))
    );
    this.currentUser = this.currentUserSubject.asObservable();
  }

  registerUser(User:User) {
    this.httpOptions = {
      headers: new HttpHeaders({
        "x-auth": this.currentUserSubject.value.token
      })
    };

    return this.http
      .post<any>(
        "api/answer",
       User
      )
      .pipe(
        map(res => {
          alert(res["massage"]);
        })
      );
  }
}
