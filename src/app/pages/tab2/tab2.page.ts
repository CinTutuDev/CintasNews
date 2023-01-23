import { Component, OnInit, ViewChild } from '@angular/core';
import { Article } from 'src/app/interfaces';
import { ApiNewsService } from 'src/app/services/api-news.service';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page implements OnInit {
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll | undefined;

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
      .getTopHeadlinesByCategory(this.selectedCategory)
      .subscribe((articles) => {
        this.articles = [...this.articles, ...articles];
      });
  }

  segmentChanged(event: Event) {
    this.selectedCategory = (event as CustomEvent).detail.value;
    this.apiNewsService
      .getTopHeadlinesByCategory(this.selectedCategory)
      .subscribe((articles) => {
        this.articles = [...articles];
      });
  }

  loadData(event: any) {
    this.apiNewsService
      .getTopHeadlinesByCategory(this.selectedCategory, true)
      .subscribe((articles) => {

        if (articles.length === this.articles.length ) {
          event.target.disabled = true;
          return;
        }

        this.articles = articles;
        event.target.complete();
      });
  }
  
}
