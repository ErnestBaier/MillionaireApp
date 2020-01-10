import { Component, OnInit } from '@angular/core';

import {placeholderData} from '../models/InvestmentDataPoint';

@Component({
  selector: 'app-growth-table-component',
  templateUrl: './growth-table-component.component.html',
  styleUrls: ['./growth-table-component.component.css']
})
export class GrowthTableComponentComponent implements OnInit {
  myDataArray = placeholderData;

  displayedColumns: string[] = ['Age','Principal','Growth','Total'];  
  constructor() {
  }

  ngOnInit() {
  }

}
