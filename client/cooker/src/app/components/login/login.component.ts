import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl
} from "@angular/forms";
import { AuthenticationService } from '../../services/authentication.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private builder: FormBuilder,private AuthenticationService: AuthenticationService,private router: Router) { }

  username = new FormControl("");
  password = new FormControl("");

  loginForm: FormGroup = this.builder.group({
    username: this.username,
    password: this.password
  });

  ngOnInit() {}

  onFormSubmit() {

    this.AuthenticationService.loginCustomer(this.loginForm.value.username,this.loginForm.value.password).subscribe(
      data => {
        // this.toastr.success("User Registered successfully!!","Successfull")
        this.router.navigate(["/"]);

      },
      error => {
        console.log(error);
        alert("error");

      }
    );
  }

}
