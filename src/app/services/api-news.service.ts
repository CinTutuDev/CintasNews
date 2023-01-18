import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { NewsResponse, Article } from '../interfaces';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

const apiKey = environment.apiKey;
@Injectable({
  providedIn: 'root',
})
export class ApiNewsService {
  constructor(private http: HttpClient) {}

  getTopHeadlines(): Observable<Article[]> {
    return this.http
      .get<NewsResponse>(
        /*  El original api: 
      https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=0a200e94af064a2d8ad268a931802c59 */
        `https://newsapi.org/v2/top-headlines?country=us&category=business`,
        {
          params: {
            apiKey,
          },
        }
      )
      .pipe(
        map(({articles}) => articles));
  }
}
