import { Component, OnInit, Input } from '@angular/core';
import { Cake } from 'src/app/models/Cake';

@Component({
  selector: 'app-cake-card',
  templateUrl: './cake-card.component.html',
  styleUrls: ['./cake-card.component.scss']
})
export class CakeCardComponent implements OnInit {
  @Input('cakeData') cakelist: Cake[];

  constructor() { }

  ngOnInit() {
  }

}
