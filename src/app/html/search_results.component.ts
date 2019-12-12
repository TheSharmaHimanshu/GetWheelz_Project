import { Component } from '@angular/core';

@Component({
  selector: 'search_results',
  templateUrl: './search_results.component.html',
  styleUrls: ['../css/search_results.component.css']
})
export class SearchResults {
  title = 'SearchResults';
  img_car1 = "../assets/car_images/01_McLaren_F1.jpg";
  img_car2 = "../assets/car_images/02_Ferrari_F50.jpg";
  img_car3 = "../assets/car_images/03_Lamborghini_Murcielago.jpg";
  img_car4 = "../assets/car_images/04_Maserati_GranTurismo.jpg";
}
