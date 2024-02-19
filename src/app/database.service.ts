import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JobPosition } from './main/work-experience/job-position/job-position';
import { PersonalInfo } from './side/personal-info/personal-info';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(private http: HttpClient) { }
  // Send HTTP request to provided path. Receive an observable.
  getWorkExperience() {
    return this.http.get<JobPosition[]>("/api/work-experience")
  }

  getPersonalInfo() {
    return this.http.get<PersonalInfo[]>("/api/personal-info")
  }
}
