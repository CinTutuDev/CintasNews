import { Component, Input } from '@angular/core';
import { Article } from '../../interfaces';
import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';
import { ActionSheetController, Platform } from '@ionic/angular';
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

  constructor(
    private iab: InAppBrowser,
    private platform: Platform,
    private actionSheet: ActionSheetController
  ) {}

  async openMenu() {
    const actionSheet = await this.actionSheet.create({
      header: 'Opciones',
      buttons: [
        {
          text: 'Compartir',
          icon: 'share-outline',
          cssClass: 'compartir',
          handler: () => this.onShareArticle(),
        },
        {
          text: 'Favoritos',
          icon: 'heart-outline',
          cssClass: 'favorite',
          handler: () => this.onToggleFavorite(),
        },
        {
          text: 'Cancel',
          icon: 'close-outline',
          role: 'cancel',
          cssClass: 'red',
          handler: () => {
            // Nothing to do, action sheet is automatically closed
          },
        },
      ],
    });
    await actionSheet.present();
  }

  onShareArticle() {
    console.log('Hoja de acción');
  }
  onToggleFavorite() {
    console.log('Alrtenar favoritos');
  }

  openArticle() {
    //si es en ios o android...
    if (this.platform.is('ios') || this.platform.is('android')) {
      const browser = this.iab.create(this.article.url, 'self');
      browser.show();
      return;
    }
    //si es navegador web
    window.open(this.article.url, '_blank');
  }
}
