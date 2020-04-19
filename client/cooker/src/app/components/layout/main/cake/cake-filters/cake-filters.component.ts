import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cake-filters',
  templateUrl: './cake-filters.component.html',
  styleUrls: ['./cake-filters.component.css']
})
export class CakeFiltersComponent implements OnInit {
  filteredCategoryList = [
    { id: 1, name: 'شیرینی سرای امین' },
    { id: 2, name: 'شیرینی سرای گله' },
    { id: 3, name: 'شیرینی سرای لبخند' },
    { id: 4, name: 'شیرینی سرای مادر' },
    { id: 5, name: 'شیرینی سرای اندولس' },
    { id: 6, name: 'شیرینی سرای الپ' },
  ];
  selectedCategory;
  onSelectCategory(item) {
    this.selectedCategory = item.id;
  }

  filteredCategoryList2 = [
    { id: 1, name: 'کیک فندانتی' },
    { id: 2, name: 'کیک بزرگسال' },
    { id: 3, name: 'کیک دخنرونه' },
    { id: 4, name: 'کیک پسرونه' },
    { id: 5, name: 'کیک عقد' },
    { id: 6, name: 'سایر کیک ها' },
  ];
  selectedCategory2;
  onSelectCategory2(item2) {
    this.selectedCategory2 = item2.id;
  }
  constructor() { }

  ngOnInit() {
  }

}
