import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import Course from 'src/app/courses';
import { CourseService } from 'src/app/course.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent implements OnInit  {
  name = 'Angular 5';
  displayedColumns = ['popularity', 'author', 'difficulty_level', 'name'];
  dataSource = new MatTableDataSource<Element>(ELEMENT_DATA);

  courses: Course[];  

  constructor(private cs: CourseService) { }


  ngOnInit() {
    this.cs.getCourses().subscribe((data: Course[]) =>{
      this.courses = data;
      console.log(this.courses);
    })
  }

}

export interface Element {
  popularity: number;
  author: string;
  difficulty_level: number;
  name: string;
}

const ELEMENT_DATA: Element[] = [
  {popularity: 83.0, author: 'Victor Fleming', difficulty_level: 8.3, name: 'Economics'},

  {popularity: 88.0, author: 'George Lucas', difficulty_level: 8.8, name: 'H'},

  {popularity: 66.0, author: 'Giovanni Pastrone', difficulty_level: 6.6, name: 'Psychology'},

];