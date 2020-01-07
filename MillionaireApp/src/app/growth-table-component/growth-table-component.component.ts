import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-growth-table-component',
  templateUrl: './growth-table-component.component.html',
  styleUrls: ['./growth-table-component.component.css']
})
export class GrowthTableComponentComponent implements OnInit {
  myDataArray = [
    {Year: 1,Principal: 2,Growth: 3, Total: 5},
    {Year: 1,Principal: 2,Growth: 3, Total: 5},
    {Year: 1,Principal: 2,Growth: 3, Total: 5},
    {Year: 1,Principal: 2,Growth: 3, Total: 5},
    {Year: 1,Principal: 2,Growth: 3, Total: 5}];
  displayedColumns: string[] = ['Year','Principal','Growth','Total'];  
  constructor() {
  }

  ngOnInit() {
  }

}
