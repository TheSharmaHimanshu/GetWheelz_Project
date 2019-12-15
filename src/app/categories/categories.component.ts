import { Component, OnInit } from '@angular/core';
import { MatBottomSheet, MatDialog } from '@angular/material';
import { AdvanceSearchComponent } from '../advance-search/advance-search.component';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';


@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
  styles: []
})

export class CategoriesComponent implements OnInit {

  constructor(private bottomSheet: MatBottomSheet, public dialog: MatDialog) { }

  openAdvanceSearch(){
    this.bottomSheet.open(AdvanceSearchComponent)
  }

  openLogin(){
    this.dialog.open(LoginComponent);
  }

  openRegister(){
    this.dialog.open(RegisterComponent);
  }

  ngOnInit() {
  }

}
