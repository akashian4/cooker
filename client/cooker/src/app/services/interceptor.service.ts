import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent
} from "@angular/common/http";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
@Injectable()
export class InterceptorService implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let reqUrl = 'http://localhost:3000/';
    req = req.clone({
      headers: req.headers.set(
        'x-auth',
        localStorage.getItem("token")
      ),
      url: reqUrl + "" + req.url
    });
    return next.handle(req);
  }
}
