import { Component, OnInit } from '@angular/core';
import { AmazingTimePickerService } from 'amazing-time-picker';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-create-cake',
  templateUrl: './create-cake.component.html',
  styleUrls: ['./create-cake.component.css']
})
export class CreateCakeComponent implements OnInit {
  constructor(private atp: AmazingTimePickerService) { }
  ngOnInit() { }


  s;
  imgselected;
  imgselectedname;
  color = 0;
  colorname = "آبی کمرنگ";
  imgList = [
    { id: 1, name: 'mor', n: 'مربع' },
    { id: 2, name: 'mos', n: 'مستطیل' },
    { id: 3, name: 'mosal', n: 'مثلث' },
    { id: 4, name: 'dayere', n: 'دایره' },
    { id: 5, name: 'bey', n: 'بیضی' },
    { id: 6, name: 'ghalb', n: 'قلب' },
    { id: 7, name: 'mos-gerd', n: 'مستطیل گرد' },
    { id: 8, name: 'panj', n: 'پنج ضلعی' }
  ];
  onimgselected(item) {
    this.s = item.id;
    this.imgselected = item.name;
    this.imgselectedname = item.n;
  }
  colorList = [
    { id: 0, name: 'آبی کمرنگ' },
    { id: 1, name: 'سفید' },
    { id: 2, name: 'قرمز' },
    { id: 3, name: 'زرد' },
    { id: 4, name: 'سبز' },
    { id: 5, name: 'آبی پررنگ' },
    { id: 6, name: 'بنفش' },
    { id: 7, name: 'نارنجی' },
    { id: 8, name: 'صورتی' }
  ];
  oncolor(item) {
    this.color = item.id;
    this.colorname = item.name;
  }





  tarh = 0;
  tarhname;
  tarhwidth = 200;
  tarhheight = 200;
  tarhwidthchange(e) {
    this.tarhwidth = e.target.value;
  }
  tarhheightchange(e) {
    this.tarhheight = e.target.value;
  }
  tarhList = [
    { id: 1, name: 'باب اسفنجی' },
    { id: 2, name: 'بن تن' },
    { id: 3, name: 'باب اسفنجی' },
    { id: 4, name: 'کیتی' },
    { id: 5, name: 'مک مویین' },
    { id: 6, name: 'میکی موس' },
    { id: 7, name: 'پلنگ صورتی' },
    { id: 8, name: 'پاندای کونگ فو کار' },
    { id: 9, name: 'پو' },
    { id: 10, name: 'تام و جری' },
    { id: 11, name: 'تام و جری' },
  ];
  ontarh(item) {
    this.tarh = item.id;
    this.tarhname = item.name;
  }






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
  width = 200;
  height = 200;
  widthchange(e) {
    this.width = e.target.value;
  }
  heightchange(e) {
    this.height = e.target.value;
  }






  name = "";//متن روی کیک
  fontsize = 20;
  getfontsize(f) {
    return f + 'px';
  }
  favoritecolor: string;
  colorlist: string[] = [
    'قرمز',
    'ابی',
    'سیز',
    'صورتی',
    'زرد',
    'سیاه',
    'سفید',
    'نارنجی',
    'خاکستری'
  ];
  getColor(c) {
    switch (c) {
      case 'قرمز':
        return 'red';
      case 'ابی':
        return 'blue';
      case 'سیز':
        return 'green';
      case 'صورتی':
        return 'pink';
      case 'زرد':
        return 'yellow';
      case 'سیاه':
        return 'black';
      case 'سفید':
        return 'white';
      case 'نارنجی':
        return 'orange';
      case 'خاکستری':
        return 'gray';
    }
  }






  TasteList = [
    { id: 1, name: 'کاکایویی' },
    { id: 2, name: 'وانیلی' },
    { id: 3, name: 'مخمل قرمز' },
    { id: 4, name: 'سنگ مرمر' },
    { id: 5, name: 'هویجی' },
    { id: 6, name: 'لیمویی' },
    { id: 7, name: 'نسکافه' },
    { id: 8, name: 'موزی' },
    { id: 9, name: 'نارگیلی' }
  ];
  selectedTaste;
  onSelectTaste(item) {
    this.selectedTaste = item.name;
  }






  selectedWeight;
  weightlist = [
    { id: 1, name: 'یک الی یک و نیم کیلوگرم' },
    { id: 2, name: 'یک و نیم الی دو کیلوگرم' },
    { id: 3, name: 'دو الی دو و نیم کیلوگرم' },
    { id: 4, name: 'دو و نیم الی سه کیلوگرم' },
    { id: 5, name: 'سه الی سه و نیم کیلوگرم' },
    { id: 6, name: 'سه و نیم الی چهار کیلوگرم' },
    { id: 7, name: 'چهار الی پنج کیلوگرم' },
    { id: 8, name: 'پنج الی شش کیلو گرم' },
    { id: 9, name: 'شش الی هفت کیلوگرم' }
  ];
  onSelectWeight(item) {
    this.selectedWeight = item.name;
  }





  detailslist: string[] = ['پودر کاکایو', 'پودر نارگیل', 'ترافل', 'ژل بریلو', 'شکلات سنگی', 'پودر قهوه', 'پودر نسکافه'];
  selecteddetails: string[] = [];
  onSelectdetails(item) {
    for (let i = 0; i < this.selecteddetails.length; i++) {
      if (item == this.selecteddetails[i]) {
        this.selecteddetails.splice(this.selecteddetails.indexOf(item), 1);
        console.log(this.selecteddetails);
        return;
      }
    }
    this.selecteddetails.push(item);
    console.log(this.selecteddetails);
  }








  DetailsList = [
    { id: 1, name: 'گردو' },
    { id: 2, name: 'موز' },
    { id: 3, name: 'اناناس' },
    { id: 4, name: 'شکلات چیپسی' },
  ];
  selectedDetails: string[] = [];
  onSelectDetails(item) {

    for (let i = 0; i < this.selectedDetails.length; i++) {
      if (item.name == this.selectedDetails[i]) {
        this.selectedDetails.splice(this.selectedDetails.indexOf(item), 1);
        console.log(this.selectedDetails);
        return;
      }
    }
    this.selectedDetails.push(item.name);
    console.log(this.selectedDetails);

    // this.selectedDetails = item.name;
  }




  public selectedTime = '18:33';
  public selectedDate ;
  // jsonDate = "2018-01-08T20:21:29.4674496";
  date = new FormControl(new Date());
  serializedDate = new FormControl((new Date()).toISOString());

  addEvent($event){
    console.log(this.date.value);
    console.log(this.serializedDate.value);
  }

  open() {
    const amazingTimePicker = this.atp.open({
      time: this.selectedTime,
      locale: 'fa',
      theme: 'material-blue',
      arrowStyle: {
        background: 'red',
        color: 'white'
      }
    });
    amazingTimePicker.afterClose().subscribe(time => {
      this.selectedTime = time;
      console.log(this.selectedTime);

    });
  }
}
