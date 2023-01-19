import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/interfaces';
import { ApiNewsService } from 'src/app/services/api-news.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page implements OnInit {
  public cagories: string[] = [
    'business',
    'entertainment',
    'general',
    'sports',
    'technology',
  ];
  //Se hace para seleccionar la 1º posicion
  public selectedCategory: string = this.cagories[0];
  public articles: Article[] = [];

  constructor(private apiNewsService: ApiNewsService) {}

  ngOnInit(): void {
    this.apiNewsService
      .getTopHeadLinesByCategory(this.selectedCategory)
      .subscribe((articles) => {
        this.articles = [...this.articles, ...articles];
      });
  }

  segmentChanged(event: any) {
    this.selectedCategory = event.detail.value;
    this.apiNewsService
      .getTopHeadLinesByCategory(this.selectedCategory)
      .subscribe((articles) => {
        this.articles = [...articles];
      });
  }
}
