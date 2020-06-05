import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  uri = "http://localhost:4000/clients"


  constructor(private http:HttpClient) { }

  getCourses() {  
    return this  
           .http  
           .get(`${this.uri}`);  
  }  
}
