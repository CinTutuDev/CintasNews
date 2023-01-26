import { Component, Input } from '@angular/core';
import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';
import {
  ActionSheetButton,
  ActionSheetController,
  Platform,
} from '@ionic/angular';
import { SocialSharing } from '@awesome-cordova-plugins/social-sharing/ngx';
import { Article } from '../../interfaces';
import { StorageService } from '../../services/storage.service';
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
    private actionSheetC: ActionSheetController,
    private socialSharing: SocialSharing,
    private storageServide: StorageService
  ) {}

  openArticle() {
    if (this.platform.is('ios') || this.platform.is('android')) {
      const browser = this.iab.create(this.article.url);
      browser.show();
      return;
    }

    window.open(this.article.url, '_blank');
  }

  async openMenu() {
    const articleInFavorite = this.storageServide.articleInFavorites(
      this.article
    );

    const normalBtns: ActionSheetButton[] = [
      {//si el articulo está en favoritos remover favorito
        text: articleInFavorite ? '✂️Borrar de favorito' : '💚Favorito',
        /* icon: articleInFavorite ? 'heart' : 'heart-outline', */
        cssClass: 'green' ,
        handler: () => this.onToggleFavorite(),
      },
      {
        text: '💣Cancelar',
        /* icon: 'close-outline', */
        role: 'cancel',
        cssClass: 'red'
      },
    ];

    const shareBtn: ActionSheetButton = {
      text: 'Compartir',
      icon: 'share-outline',
      handler: () => this.onShareArticle(),
    };

    if (this.platform.is('capacitor')) {
      normalBtns.unshift(shareBtn);
    }

    const actionSheet = await this.actionSheetC.create({
      header: 'Opciones',
      cssClass: 'blue',
      buttons: normalBtns,
    });

    await actionSheet.present();
  }
  onShareArticle() {
    const { title, source, url } = this.article;

    this.socialSharing.share(title, source.name, url);
  }

  onToggleFavorite() {
    this.storageServide.saveRemoveArt(this.article);
  }
}
