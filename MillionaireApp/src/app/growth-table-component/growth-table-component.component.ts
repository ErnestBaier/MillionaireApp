import { Component, OnInit, Input } from '@angular/core';
import { InvestmentDataPoint } from '../models/InvestmentDataPoint';

@Component({
  selector: 'app-growth-table-component',
  templateUrl: './growth-table-component.component.html',
  styleUrls: ['./growth-table-component.component.css']
})
export class GrowthTableComponentComponent implements OnInit {

  @Input() tableData : InvestmentDataPoint[];
  displayedColumns: string[] = ['Age','Principal','Growth','Total'];  
  constructor() {
    console.log(this.tableData);
  }
  
  ngOnInit() {
    console.log(this.tableData);
  }

}
