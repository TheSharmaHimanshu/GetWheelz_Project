import { Component, OnInit} from '@angular/core';
import { MatBottomSheetRef} from '@angular/material';

@Component({
  selector: 'app-advance-search',
  templateUrl: './advance-search.component.html',
  styleUrls: ['./advance-search.component.css']
})

export class AdvanceSearchComponent implements OnInit {

  constructor(private bottomSheetRef: MatBottomSheetRef<AdvanceSearchComponent>) {}

  ngOnInit() {
  }

  collapseList(str){
    this.bottomSheetRef.dismiss(str);
  }

}
