import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { User } from 'src/app/models/User';
import { ToastrService } from "ngx-toastr";
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl
} from "@angular/forms";
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private AuthenticationService: AuthenticationService, private builder: FormBuilder,private toastr: ToastrService,
    private router: Router  ) { }

  ngOnInit() {
  }

  firstname = new FormControl('');
  lastname = new FormControl("");
  phone = new FormControl("");
  email = new FormControl("");
  username = new FormControl("");
  password = new FormControl("");


  registerForm: FormGroup = this.builder.group({
    firstname: this.firstname,
    lastname: this.lastname,
    phone: this.phone,
    email: this.email,
    username: this.username,
    password: this.password
  });



  onFormSubmit() {
    var user = this.registerForm.value;
    console.log(user);
    this.AuthenticationService.registerCustomer(user).subscribe(
      data => {
        alert("User Registered successfully!!");
        // this.toastr.success("User Registered successfully!!","Successfull")
        this.router.navigate(["/"]);
      },
      error => {
        console.log(error);
        alert(error);

      }
    );
  }

}
