import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isLogged: boolean;
  itemCount = 1;

  constructor() {
    this.isLogged = true;
  }

  ngOnInit() {
  }

  onLogout() {
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
