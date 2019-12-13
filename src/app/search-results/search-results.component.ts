import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-results',
  templateUrl: './search_results.component.html',
  styleUrls: ['./search_results.component.css'],
  styles: []
})
export class SearchResultsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  title = 'SearchResults';
  img_car1 = "../assets/car_images/01_McLaren_F1.jpg";
  img_car2 = "../assets/car_images/02_Ferrari_F50.jpg";
  img_car3 = "../assets/car_images/03_Lamborghini_Murcielago.jpg";
  img_car4 = "../assets/car_images/04_Maserati_GranTurismo.jpg";
}