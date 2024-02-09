import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JobPosition } from './main/work-experience/job-position/job-position';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(private http: HttpClient) { }
  // funktion, die einen http request an /api/work-experience sendet und eine response vom type JobPosition[] wird erwartet. Returnt ein observable
  getWorkExperience() {
    return this.http.get<JobPosition[]>("/api/work-experience")
  }
}
