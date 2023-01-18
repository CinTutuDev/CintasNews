import { Component, OnInit } from '@angular/core';
import { ApiNewsService } from '../../services/api-news.service';
import { Article } from '../../interfaces/index';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page implements OnInit {

  //PAra acceder al html :
  public articles : Article[]=[];

  constructor(private apiNewsService: ApiNewsService) {}

  ngOnInit() {
    this.apiNewsService.getTopHeadlines().subscribe((articles) => this.articles.push(...articles));
  }
}
