import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(private http: HttpClient) {}
  apiURL: string = 'http://localhost:3000'

  getRecords = (endpoint: string) => this.http.get(this.apiURL + endpoint);
}
