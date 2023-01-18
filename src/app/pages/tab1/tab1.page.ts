import { Component, OnInit } from '@angular/core';
import { ApiNewsService } from '../../services/api-news.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page implements OnInit {
  constructor(private apiNewsService: ApiNewsService) {}
  ngOnInit() {
    this.apiNewsService.getTopHeadlines().subscribe((respuesta) => {
      console.log(respuesta);
    });
  }
}
