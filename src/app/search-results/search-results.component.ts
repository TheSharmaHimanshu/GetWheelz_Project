import { Component, OnInit } from '@angular/core';
import { DataService } from "../data.service";
import { carsDetails } from "../../assets/car_specs/car_specs";

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css'],
  styles: []
})
export class SearchResultsComponent implements OnInit {

  page_title:string;
  images_index:number;
  searched_cars;
  chosenCar;
  cars = carsDetails;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.currentSearch.subscribe(search => this.getPageInfo(search));
    this.data.currentCar.subscribe(chosenCar => this.chosenCar = chosenCar);
  }

  getPageInfo(parameters){
    this.page_title = 'Search Results For: ' + parameters;
    if(parameters == ''){
      this.searched_cars = this.cars;
    }
    else{
      this.searched_cars = this.cars.filter( car => (car.model.toUpperCase() == parameters.toUpperCase() || car.maker.toUpperCase() == parameters.toUpperCase()));
    }    
  }

  sendCar(car){
    this.data.goToDetails(car);
  }

  search(newSearch: string) {
    this.data.search(newSearch);
  }
}