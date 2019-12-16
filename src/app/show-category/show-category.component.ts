import { Component, OnInit } from '@angular/core';
import { DataService } from "../data.service";
import { carsDetails } from "../../assets/car_specs/car_specs";

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
  chosenCar;
  cars = carsDetails;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.currentMessage.subscribe(message => this.getPageInfo(message));
    this.data.currentCar.subscribe(chosenCar => this.chosenCar = chosenCar);
  }

  getPageInfo(message){
    this.page_title = message + ' Cars';
    this.category_cars = this.cars.filter( car => car.category == message);
  }

  sendCar(car){
    this.data.goToDetails(car);
  }

  
}
