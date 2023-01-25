import { Component, Input } from '@angular/core';
import { Article } from '../../interfaces';
import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';
import {ActionSheetButton, ActionSheetController, Platform } from '@ionic/angular';
import { SocialSharing } from "@awesome-cordova-plugins/social-sharing/ngx";
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
  ) {}

  async openMenu() {
    const normalBtns: ActionSheetButton[] = [
      {
        text:  '💚Favorito',
        icon:  'heart-outline',
        handler: () => this.onToggleFavorite()
      },
      {
        text: '🚨Cancelar',
        icon: 'close-outline',
        role: 'cancel',
      }
    ]

    const shareBtn: ActionSheetButton = {
      text: 'Compartir',
      icon: 'share-outline',
      handler: () => this.onShareArticle()
    };

    if ( this.platform.is('capacitor') ) {
      normalBtns.unshift(shareBtn);
    }


    const actionSheet = await this.actionSheetC.create({
      header: 'Opciones',
      buttons: normalBtns
    });

    

    await actionSheet.present();
  }

  onShareArticle() {
    const { title, source, url } = this.article;
    
    this.socialSharing.share(
      title,
      source.name,
      url
    );

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
