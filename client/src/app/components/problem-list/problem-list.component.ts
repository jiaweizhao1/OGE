import { Component, OnInit } from '@angular/core';
import { Problem } from '../../models/problem.model';

const PROBLEMS: Problem[] = [
	{
		"id":1,
		"name":"Straight line",
		"desc":"Draw a simple straight line.",
		"difficulty":"easy"
	},
	{
		"id":2,
		"name":"2 straight lines",
		"desc":"Draw 2 straight lines.",
		"difficulty":"medium"
	},
	{
		"id":3,
		"name":"Sine curve",
		"desc":"Draw a sine curve.",
		"difficulty":"medium"
	},
	{
		"id":4,
		"name":"Bar chart",
		"desc":"Draw a bar chart represent GDP growth.",
		"difficulty":"hard"},
	{
		"id":5,
		"name":"3D diagram",
		"desc":"Draw a 3D diagram of a ball.",
		"difficulty":"super"
	}
];
  

@Component({
  selector: 'app-problem-list',
  templateUrl: './problem-list.component.html',
  styleUrls: ['./problem-list.component.css']
})
export class ProblemListComponent implements OnInit {
  problems: Problem[];
  
  constructor() { }

  ngOnInit() {
    this.getProblems();
  }
  
  getProblems() {
    this.problems = PROBLEMS;
  }

}
