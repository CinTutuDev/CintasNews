import { Article } from 'src/app/interfaces';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  private _storage: Storage | null = null;
  private _localArt: Article[] = [];


  constructor(private storage: Storage) {
    this.init();
  }

  get getLocalArticles() {
    return [...this._localArt];
  }

  async init() {
    const storage = await this.storage.create();
    this._storage = storage;
    this.loadFavorites();
  }

  async saveRemoveArt(article: Article) {
    const exists = this._localArt.find(
      (localArt) => localArt.title === article.title
    );

    if (exists) {
      this._localArt = this._localArt.filter(
        (localArt) => localArt.title !== article.title
      );
    } else {
      this._localArt = [article, ...this._localArt];
    }

    this._storage?.set('articles', this._localArt);
  }
  async loadFavorites() {
    try {
      const articles = await this._storage?.get('articles');
      this._localArt = articles || [];
    } catch (error) {}
  }
  articleInFavorites(article: Article) {
    return !!this._localArt.find(
      (localArticle) => localArticle.title === article.title
    );
  }
}
