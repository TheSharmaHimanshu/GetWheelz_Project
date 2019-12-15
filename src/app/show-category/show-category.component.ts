import { Component, OnInit } from '@angular/core';
import { DataService } from "../data.service";

@Component({
  selector: 'app-show-category',
  templateUrl: './show-category.component.html',
  styleUrls: ['./show-category.component.css'],
  styles: []
})
export class ShowCategoryComponent implements OnInit {

  page_title:string;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.currentMessage.subscribe(message => this.page_title = message)
  }
  
  img_car1 = "../assets/car_images/01_McLaren_F1.jpg";
  img_car2 = "../assets/car_images/02_Ferrari_F50.jpg";
  img_car3 = "../assets/car_images/03_Lamborghini_Murcielago.jpg";
  img_car4 = "../assets/car_images/04_Maserati_GranTurismo.jpg";

}
