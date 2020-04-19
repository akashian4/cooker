import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css', './home.component.scss']
})
export class HomeComponent implements OnInit {
  cards = [
    {
      title: 'Card Title 1',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      buttonText: 'Button',
      img: 'https://niavaran.center/wp-content/uploads/2020/01/%DA%A9%DB%8C%DA%A9-%D8%B4%DB%8C%DA%A9-2020-1.jpg'
    },
    {
      title: 'Card Title 2',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      buttonText: 'Button',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSu2zGVMK5HFK1w8_PthkRsIly_ut9hrkoJssDSvq339o0a3s4K&usqp=CAU'
    },
    {
      title: 'Card Title 3',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      buttonText: 'Button',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTV7sNiBRicEn-Lk-r68OfGjn8XD0JK6bul1XSP6l1pXJzsDbi-&usqp=CAU'
    },
    {
      title: 'Card Title 4',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      buttonText: 'Button',
      img: 'https://ws.ham-yaar.com//videos/taghzie_Dakheli-%20Mini%20shirini/image/Amazing%20CAKES%20Cookies%20Cupcakes%20for%20MOM%20Compilation_3.mp4.jpg'
    },
    {
      title: 'Card Title 5',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      buttonText: 'Button',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQGKaQFJhgV_ba5j5_0ypFs45ZlKtMSGa9ePmQx_mboPNXI1E_n&usqp=CAU'
    },
    {
      title: 'Card Title 6',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      buttonText: 'Button',
      img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg'
    },
    {
      title: 'Card Title 7',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      buttonText: 'Button',
      img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg'
    },
    {
      title: 'Card Title 8',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      buttonText: 'Button',
      img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg'
    },
    {
      title: 'Card Title 9',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      buttonText: 'Button',
      img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg'
    },
  ];
  slides: any = [[]];
  chunk(arr, chunkSize) {
    let R = [];
    for (let i = 0, len = arr.length; i < len; i += chunkSize) {
      R.push(arr.slice(i, i + chunkSize));
    }
    return R;
  }
  ngOnInit() {
    this.slides = this.chunk(this.cards, 3);
  }

}
