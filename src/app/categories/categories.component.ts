import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material';
import { AdvanceSearchComponent } from '../advance-search/advance-search.component';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
  styles: []
})

export class CategoriesComponent implements OnInit {

  constructor(private bottomSheet: MatBottomSheet) { }

  openAdvanceSearch(){
    this.bottomSheet.open(AdvanceSearchComponent)
  }

  ngOnInit() {
  }

}
