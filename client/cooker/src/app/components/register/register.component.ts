import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../services/service.service';
import { Customer } from 'src/app/models/Customer';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private Service: ServiceService) { }

  ngOnInit() {
  }
  a : Customer;
  onclick() {
    this.Service.registerCustomer(
      this.a
    );
  }

}
