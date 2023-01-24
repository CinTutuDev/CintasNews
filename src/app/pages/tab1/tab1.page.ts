import { Component, OnInit, ViewChild  } from '@angular/core';
import { ApiNewsService } from '../../services/api-news.service';
import { Article } from '../../interfaces/index';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page implements OnInit {

  @ViewChild(IonInfiniteScroll, {static:true})
  infiniteScroll!: IonInfiniteScroll;


  //PAra acceder al html :
  public articles : Article[]=[];

  constructor(private apiNewsService: ApiNewsService) {}

  ngOnInit() {
    this.apiNewsService.getTopHeadlines().subscribe((articles) => this.articles.push(...articles));
  }

  loadData() {
    this.apiNewsService
      .getTopHeadlinesByCategory('business', true)
      .subscribe((articles) => {

        if (articles.length === this.articles.length ) {
          this.infiniteScroll.disabled = true;
          return;
        }

        this.articles = articles;
      this.infiniteScroll?.complete();
      });
  }
}
