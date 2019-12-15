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
  images_index:number;
  category_cars;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.currentMessage.subscribe(message => this.getPageInfo(message))
  }

  getPageInfo(message){
    this.page_title = message + ' Cars';
    this.category_cars = this.cars.filter( car => car.category == message);
  }

  cars = [
    {
      img: "../assets/car_images/01_McLaren_F1.jpg",
      category: "Sport",
      maker: "McLaren",
      model: "F1",
      body: "Coupé",
      doors: 2,
      speed: "387 km/h or 241 Mph",
      engine: "V 12",
      fuel: "Petrol",
      price: "$ 1,000,000"
    },
    {
      img: "../assets/car_images/02_Ferrari_F50.jpg",
      category: "Performance",
      maker: "Ferrari",
      model: "F50",
      body: "Coupé",
      doors: 2,
      speed: "387 km/h or 241 Mph",
      engine: "V 12",
      fuel: "Petrol",
      price: "$ 1,000,000"
    },
    {
      img: "../assets/car_images/03_Lamborghini_Murcielago.jpg",
      category: "Performance",
      maker: "Lamborghini",
      model: "Murcielago",
      body: "Coupé",
      doors: 2,
      speed: "387 km/h or 241 Mph",
      engine: "V 12",
      fuel: "Petrol",
      proce: "$ 1,000,000"
    },
    {
      img: "../assets/car_images/04_Maserati_GranTurismo.jpg",
      category: "Sport",
      maker: "Maserati",
      model: "GranTurismo",
      body: "Coupé",
      doors: 2,
      speed: "387 km/h or 241 Mph",
      engine: "V 12",
      fuel: "Petrol",
      price: "$ 1,000,000"
    },
  ];
}
