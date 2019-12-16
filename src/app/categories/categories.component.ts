import { Component, OnInit } from '@angular/core';
import { MatBottomSheet, MatDialog } from '@angular/material';
import { AdvanceSearchComponent } from '../advance-search/advance-search.component';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';
import { DataService } from "../data.service";

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
  styles: []
})

export class CategoriesComponent implements OnInit {

  message:string;

  constructor(private bottomSheet: MatBottomSheet, public dialog: MatDialog, private data: DataService) { }

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
    this.data.currentMessage.subscribe(message => this.message = message)
  }

  sendCategory(category) {
    this.data.changeMessage(category);
  }

  search(newSearch: string) {
    this.data.search(newSearch);
  }

}
