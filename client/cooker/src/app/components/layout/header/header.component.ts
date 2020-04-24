import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isLogged: boolean;
  itemCount = 1;
  public currentUser;

  constructor(private authenticationService: AuthenticationService,private router: Router) {
    this.currentUser = localStorage.getItem("currentUser")
    ? JSON.parse(localStorage.getItem("currentUser"))
    : "";
    if (this.currentUser == "") {
      this.isLogged = false;
    } else {
      this.isLogged = true;

    }

  }

  ngOnInit() {

  }

  onLogout() {
    this.currentUser ="";
    localStorage.removeItem("currentUser");
    this.router.navigate(["/login"]);
    // this.customerService.Logout().subscribe(a => {
    //   localStorage.removeItem('user');
    //   this.user =
    //     localStorage.getItem('user') === 'undefined'
    //       ? null
    //       : JSON.parse(localStorage.getItem('user'));
    //   this.isLogged = this.user != null;
    //   window.location.reload();
    // });
  }
}
