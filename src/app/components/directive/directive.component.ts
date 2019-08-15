import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})
export class DirectiveComponent implements OnInit {

  coursesList: string [] = ['Typescript', 'Javascript', 'Java SE', 'C#', 'PHP'];
  isEnabled: boolean = true;

  constructor() { }

  ngOnInit() {
  }

}
