import { Component, ViewEncapsulation, OnInit, Input } from '@angular/core';

import {placeholderData} from '../models/InvestmentDataPoint';
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

	private margin = {top: 20, right: 50, bottom: 20, left: 50};
	private width: number;
	private height: number;
	private x: any;
	private y: any;
	private svg: any;
	private line: any;
	private symbolGenerator: any;

	constructor() {
		this.graphData = placeholderData;
		this.width = 800 - this.margin.left - this.margin.right;
		this.height = 500 - this.margin.top - this.margin.bottom;
	}

	ngOnInit() {
		this.initSvg();
		this.initAxis();
		this.drawAxis();
		this.drawDataPoints();
		this.drawLine();
	}

	//Append g tag to SVG to allow proper spacing of elements within SVG
	private initSvg() {
		this.svg = d3.select('svg')
			.append('g')
			.attr('id','graphGroup')
			.attr('transform', 'translate(' + this.margin.left + ',' + this.margin.top + ')')
			//.style('fill', 'green')
	}

	//Method to scale axis with data
	private initAxis() {
		this.x = d3Scale.scaleLinear().range([0, this.width]);
		this.y = d3Scale.scaleLinear().range([this.height, 0]);
		this.x.domain(d3Array.extent(this.graphData, (d : any) => d.age));
		this.y.domain(d3Array.extent(this.graphData, (d : any) => d.principal));
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
			.text("Age (Yrs)");
		//Append y-axis
		this.svg.append('g')
			.attr('class', 'axis axis--y')
			.call(d3Axis.axisLeft(this.y))
			.append('text')
			.attr('class', 'axis-title')
			.attr('transform', 'rotate(-90)')
			.attr('y', 6)
			.attr('dy', '.71em')
		//Add title to y-axis
		this.svg.append("text")
			.attr("transform", "rotate(-90)")
			.attr("y", 0 - this.margin.left)
			.attr("x",0 - (this.height / 2))
			.attr("dy", "1em")
			.style("text-anchor", "middle")
			.text("Total ($)"); 
	}

	private drawDataPoints() {
		let elements : any = d3.select('#graphGroup')
			.selectAll('circle')
			.data(this.graphData)
			.enter()
			.append('circle')
			.attr('r', 5)
			.attr('cx', (d: any,i: number) => {
				return this.x(d.age);
			})
			.attr('cy', (d: any,i: number) => {
				return this.y(d.principal);
			})
			.attr('fill', 'green')
			.attr('id', (d: any,i: number) => {
				return 'circle'+i;
			})
			.on('mouseover', (d: any,i: number) => {
				d3.select('#circle'+i)
				.text('Age:' + d.age + 'Principal:' + d.principal )
			})
	}
	private drawLine() {
		this.line = d3Curve.line()
			.x((d: any, i: number) => {
				return this.x(d.age)
			})
			.y((d: any, i: number) => {
				return this.y(d.principal)
			})
			.curve(d3Curve.curveLinear);
		let pathData = this.line(this.graphData);
		this.svg.append('path')
			.attr('d', pathData)
			.attr('stroke', 'green')
			.attr('stroke-width', '5')
			.attr('fill', 'none')
	}
}