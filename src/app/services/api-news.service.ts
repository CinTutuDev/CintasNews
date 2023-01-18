import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

const apiKey = environment.apiKey;
@Injectable({
  providedIn: 'root',
})
export class ApiNewsService {
  constructor(private http: HttpClient) {}

  getTopHeadlines() {
    return this.http.get(
      `https://newsapi.org/v2/everything?q=tesla&from=2022-12-18&sortBy=publishedAt&apiKey=${apiKey}`);
  }
}
