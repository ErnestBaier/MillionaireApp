import { Component, OnInit } from '@angular/core';
import {placeholderData, InvestmentDataPoint} from '../models/InvestmentDataPoint';
import { FormControl, Validators, ValidatorFn, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-inputs-component',
  templateUrl: './inputs-component.component.html',
  styleUrls: ['./inputs-component.component.css']
})
export class InputsComponentComponent implements OnInit {

  //Money needed not assigned a type as it is converted between a string and a number
  moneyNeeded: any;
  data: InvestmentDataPoint[];
  incorrectOrder: Boolean;

  constructor() {
    this.incorrectOrder = false;
    this.data = [];
  }

  public calculateMillion(currentAge : number, millionAge : number) { 
    this.data = [];
    this.incorrectOrder = false;
    this.moneyNeeded = null;

    let years = millionAge - currentAge;
    if(years < 0) {
      this.incorrectOrder = true;
    } else {
      let futureValue = 1000000;
      let rateOfReturn = 1.07;
      this.moneyNeeded = futureValue/(rateOfReturn ** years);
      //Assign currentPrincipal variable before is converted to text
      let currentPrincipal = this.moneyNeeded;
      this.moneyNeeded = "$" + this.moneyNeeded.toFixed(2);
      for(let i = currentAge; i < millionAge; i++) {
        let growth = currentPrincipal * 0.07;
        let total = currentPrincipal + growth;
        currentPrincipal = total;
        let dataPoint: InvestmentDataPoint = {
          age: i, 
          principal: Math.round(currentPrincipal), 
          yearlyGrowth : Math.round(growth), 
          totalValue: Math.round(total)
        };
        this.data.push(dataPoint);
      }
    }
  }

  ngOnInit() {
  }

  age = new FormControl('', [Validators.required]);
  mAge = new FormControl('', [Validators.required]);

  getErrorMessage() {
    return 'You must enter a value';
  }

  // TODO : COMPLETE No Negatives Validator
  // TODO : COMPLETE CURRENT LESS THAN GREATER Validator 
  // noNegativeNumberValidator(value : number): ValidatorFn {
  //   return (currentControl: AbstractControl): { [key: string]: any } => {
  //     return currentControl.value >= 0 ? true : null;
  //     if (!regexPattern.test(currentControl.value)) {
  //      let temp = {};
  //      temp[propertyName] = true;
  //      return temp;
  //     }
  //   }
  // }
}
