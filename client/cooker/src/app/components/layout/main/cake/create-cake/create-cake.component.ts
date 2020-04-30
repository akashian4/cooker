import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-cake',
  templateUrl: './create-cake.component.html',
  styleUrls: ['./create-cake.component.css']
})
export class CreateCakeComponent implements OnInit {
s:string;
name: string = '';


  constructor() {}

  ngOnInit() {

   
  }

}
