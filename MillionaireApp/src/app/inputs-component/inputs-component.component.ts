import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inputs-component',
  templateUrl: './inputs-component.component.html',
  styleUrls: ['./inputs-component.component.css']
})
export class InputsComponentComponent implements OnInit {

  moneyNeeded : any;
  constructor() {}

  public calculateMillion(currentAge : number, millionAge : number) {
    let years = millionAge - currentAge;
    let futureValue = 1000000;
    let rateOfReturn = 1.07;
    this.moneyNeeded = futureValue/(rateOfReturn ** years);
    this.moneyNeeded = "$" + this.moneyNeeded.toFixed(2);
  }
  ngOnInit() {
  }

}
