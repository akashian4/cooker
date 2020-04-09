import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { BehaviorSubject, Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Customer } from '../models/Customer';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  private currentUserSubject: BehaviorSubject<Customer>;
  public currentUser: Observable<Customer>;
  httpOptions: any;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<Customer>(
      JSON.parse(localStorage.getItem("currentCustomer"))
    );
    this.currentUser = this.currentUserSubject.asObservable();
  }

  registerCustomer(customer:Customer) {
    this.httpOptions = {
      headers: new HttpHeaders({
        "x-auth": this.currentUserSubject.value.token
      })
    };

    return this.http
      .post<any>(
        "api/answer",
       customer
      )
      .pipe(
        map(res => {
          alert(res["massage"]);
        })
      );
  }
}
