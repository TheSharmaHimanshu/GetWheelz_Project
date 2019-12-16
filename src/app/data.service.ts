import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class DataService {

  private messageSource = new BehaviorSubject('default message');
  currentMessage = this.messageSource.asObservable();

  private selectedCar= new BehaviorSubject('default car');

  currentCar = this.selectedCar.asObservable();

  constructor() { }

  changeMessage(message: string) {
    this.messageSource.next(message)
  }

  goToDetails(chosenCar){
    this.selectedCar.next(chosenCar)
  }      
}