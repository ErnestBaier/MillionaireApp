import { Component, ViewEncapsulation, OnInit, Input } from '@angular/core';

import * as d3 from 'd3-selection';
import * as d3Curve from 'd3';
import * as d3Scale from 'd3-scale';
import * as d3Shape from 'd3-shape';
import * as d3Array from 'd3-array';
import * as d3Axis from 'd3-axis';

@Component({
  selector: 'app-graph-component',
  templateUrl: './graph-component.component.html',
  styleUrls: ['./graph-component.component.css']
})

export class GraphComponentComponent implements OnInit {
  //Input can not be assigned typing to allow the data to be manipulated by the D3 library
  @Input() graphData;
  @Input() svgWidth : number;
  @Input() svgHeight : number;

  title = 'How Your Money Will Grow!';

  private margin = {top: 20, right: 20, bottom: 30, left: 50};
  private width: number;
  private height: number;
  private x: any;
  private y: any;
  private svg: any;
  private line: d3Shape.Line<[number, number]>;
  private symbolGenerator: any;

  constructor() {
    this.width = 800 - this.margin.left - this.margin.right;
    this.height = 500 - this.margin.top - this.margin.bottom;
  }

  ngOnInit() {
    this.initSvg();
    this.initAxis();
    this.drawAxis();
    this.drawLine();
  }

  private initSvg() {
    this.svg = d3.select('svg')
      .append('g')
      .attr('transform', 'translate(' + this.margin.left + ',' + this.margin.top + ')');
  }

  //Method to scale axis' with data
  private initAxis() {
    this.x = d3Scale.scaleLinear().range([0, this.width]);
    this.y = d3Scale.scaleLinear().range([this.height, 0]);
    this.x.domain(d3Array.extent(this.graphData, (d : any) => d.age ));
    this.y.domain(d3Array.extent(this.graphData, (d : any) => d.principal ));
  }

  private drawAxis() {
    //Append x-axis
    this.svg.append('g')
      .attr('class', 'axis axis--x')
      .attr('transform', 'translate(0,' + this.height + ')')
      .call(d3Axis.axisBottom(this.x));
    //Add title to x-axis
    this.svg.append("text")
      .attr("transform",
            "translate(" + (this.width/2) + " ," + 
                           (this.height + this.margin.top + 20) + ")")
      .style("text-anchor", "middle")
      .text("Age");
    //Append y-axis
    this.svg.append('g')
      .attr('class', 'axis axis--y')
      .call(d3Axis.axisLeft(this.y))
      .append('text')
      .attr('class', 'axis-title')
      .attr('transform', 'rotate(-90)')
      .attr('y', 6)
      .attr('dy', '.71em')
      .style('text-anchor', 'end')
      .text('Price ($)');
    
    //Add title to y-axis
    this.svg.append("text")
    .attr("transform", "rotate(-90)")
    .attr("y", 0 - this.margin.left)
    .attr("x",0 - (this.height / 2))
    .attr("dy", "1em")
    .style("text-anchor", "middle")
    .text("$ Principal $");  
  }

  private drawLine() {
    this.line = d3Shape.line()
      .x( (d: any) => {return this.x(d.age)})
      .y( (d: any) => {return this.y(d.principal)})

    this.symbolGenerator = d3Curve.symbol()
	    .type(d3Curve.symbolStar)
      .size(80);
      
    this.svg.append('path')
      .datum(this.graphData)
      .attr('class', 'line')
      .attr('d', this.line);
  }
  
  public redraw(event) {
    console.log('YOU CLIKED THE GRAPH!');
    console.log(this.graphData);
    console.log(event);
  }

}