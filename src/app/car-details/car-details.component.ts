import { Component, OnInit } from '@angular/core';
import { DataService } from "../data.service";

@Component({
  
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.css'],
  styles: []
})
export class CarDetailsComponent implements OnInit {

  page_title:string;
  car;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.currentCar.subscribe(chosenCar => this.getPageInfo(chosenCar));
  }

  getPageInfo(chosenCar){
    this.page_title = chosenCar.maker + " " + chosenCar.model;
    this.car = chosenCar;
  }

}






/*

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

/**
 * @title Dynamic grid-list
 
@Component({
  selector: 'grid-list-dynamic-example',
  templateUrl: 'grid-list-dynamic-example.html',
  styleUrls: ['grid-list-dynamic-example.css'],
})
export class GridListDynamicExample {
  tiles: Tile[] = [
    {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
  ];
}
*/
