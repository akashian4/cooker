import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-cake',
  templateUrl: './create-cake.component.html',
  styleUrls: ['./create-cake.component.css']
})
export class CreateCakeComponent implements OnInit {

  constructor() { }
  ngOnInit() { }


  public imagePath;
  imgURL: any;

  preview(files) {
    if (files.length === 0)
      return;

    var reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]);
    reader.onload = (_event) => {
      this.imgURL = reader.result;
    }
  }






}
