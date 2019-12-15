import { Component, OnInit } from '@angular/core';

@Component({
  
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.css'],
  styles: []
})
export class CarDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    
  }
  
  img_car1 = "../assets/car_images/01_McLaren_F1.jpg";
  img_car2 = "../assets/car_images/02_Ferrari_F50.jpg";
  img_car3 = "../assets/car_images/03_Lamborghini_Murcielago.jpg";
  img_car4 = "../assets/car_images/04_Maserati_GranTurismo.jpg";

}








export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

/**
 * @title Dynamic grid-list
 */
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




