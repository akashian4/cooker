import { Component, OnInit } from '@angular/core';
import { Cake } from 'src/app/models/Cake';

@Component({
  selector: 'app-cake-list',
  templateUrl: './cake-list.component.html',
  styleUrls: ['./cake-list.component.css']
})
export class CakeListComponent implements OnInit {
  ismoney = true;
  searchString: string;
  cakeList: Cake[];


  constructor() {
    this.searchString = 'adasd';
    this.cakeList = [
      { cakeId: 1, name: 'کیک 3 ظبقه', description: 'b', primaryImage: 'https://satisho.com/wp-content/uploads/2019/09/tazeen-cake-satisho-9.jpg', secondaryImage: 'd', price: 25000, minWeight: 5 },
      { cakeId: 2, name: 'کیک عدد 6', description: 'b', primaryImage: 'https://satisho.com/wp-content/uploads/2019/09/tazeen-cake-satisho-8.jpg', secondaryImage: 'd', price: 27000, minWeight: 3 },
      { cakeId: 3, name: 'کیک بادکنک', description: 'b', primaryImage: 'https://satisho.com/wp-content/uploads/2019/09/tazeen-cake-satisho-19.jpg', secondaryImage: 'd', price: 23000, minWeight: 1.5 },
      { cakeId: 4, name: 'سابلو شاتوت', description: 'b', primaryImage: 'https://satisho.com/wp-content/uploads/2019/09/tazeen-cake-satisho-10.jpg', secondaryImage: 'd', price: 29000, minWeight: 1.5 },
      { cakeId: 5, name: 'کیک قمر', description: 'b', primaryImage: 'https://satisho.com/wp-content/uploads/2019/09/tazeen-cake-satisho-11.jpg', secondaryImage: 'd', price: 28500, minWeight: 2 },
      { cakeId: 6, name: 'کیک گلها', description: 'b', primaryImage: 'https://satisho.com/wp-content/uploads/2019/09/tazeen-cake-satisho-13.jpg', secondaryImage: 'd', price: 24000, minWeight: 2 },
      { cakeId: 7, name: 'کیک فضایی', description: 'b', primaryImage: 'https://satisho.com/wp-content/uploads/2019/09/tazeen-cake-satisho-14.jpg', secondaryImage: 'd', price: 32000, minWeight: 1.5 },
      { cakeId: 8, name: 'کیک توت فرنگی', description: 'b', primaryImage: 'https://satisho.com/wp-content/uploads/2019/09/tazeen-cake-satisho-15.jpg', secondaryImage: 'd', price: 26500, minWeight: 2 },
    ];
  }

  ngOnInit() {
  }

}
