import { Component, Input } from '@angular/core';
import { Article } from '../../interfaces';
import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';
import { Platform } from '@ionic/angular';
@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent {
  @Input()
  article!: Article;
  @Input()
  index!: number;

  constructor(private iab: InAppBrowser, private platform: Platform) {}

  onClick() {}

  openArticle() {
    //si es en ios o android...
    if (this.platform.is('ios') || this.platform.is('android')) {
      const browser = this.iab.create(this.article.url, 'self');
      browser.show();
      return;
    }
    //si es navegador web
    window.open(this.article.url, '_blank')
  }
}
