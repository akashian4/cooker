import { Injectable } from "@angular/core";
import {
  Router,
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from "@angular/router";

import { AuthenticationService } from "../services/authentication.service";

@Injectable({ providedIn: "root" })
export class AuthGuard implements CanActivate{
  
  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const currentUser = this.authenticationService.currentUserValue;

    // let roles = route.data["roles"] as Array<string>;
    // console.log(roles);

    if (currentUser) {
      // authorised so return true

      return true;
    }

    // not logged in so redirect to login page with the return url
    this.router.navigate(["/login"], { queryParams: { returnUrl: state.url } });
    return false;
  }

  // canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
  //   const currentUser = this.authenticationService.currentUserValue;

  //   if (currentUser["result"]["is_student"]) {
  //   } else {
  //   }
  // }
}
