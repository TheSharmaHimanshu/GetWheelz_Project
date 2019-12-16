import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class DataService {

  private messageSource = new BehaviorSubject('default message');
  currentMessage = this.messageSource.asObservable();

  private selectedCar= new BehaviorSubject('default car');
  currentCar = this.selectedCar.asObservable();

  private searchSource = new BehaviorSubject('');
  currentSearch = this.searchSource.asObservable();

  constructor() { }

  changeMessage(message: string) {
    this.messageSource.next(message);
  }

  goToDetails(chosenCar){
    this.selectedCar.next(chosenCar);
  }
  
  search(parameters: string){
    this.searchSource.next(parameters);
  }
}