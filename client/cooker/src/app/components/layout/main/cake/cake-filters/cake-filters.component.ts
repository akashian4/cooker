import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cake-filters',
  templateUrl: './cake-filters.component.html',
  styleUrls: ['./cake-filters.component.css']
})
export class CakeFiltersComponent implements OnInit {
  filteredCategoryList = [
    { id: 1, name: 'sdas' },
    { id: 2, name: 'ads' },
    { id: 3, name: 'sd' },
    { id: 4, name: 'sad' },
    { id: 5, name: 'dfs' },
    { id: 6, name: 'g' },
  ];
  selectedCategory;
  onSelectCategory(item) {
    this.selectedCategory = item.id;
  }
  constructor() { }

  ngOnInit() {
  }

}
