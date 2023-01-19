import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page {
  public cagories: string[] = [
    'business',
    'entertainment',
    'general',
    'sports',
    'technology',
  ];
  //Se hace para seleccionar la 1º posicion
  public selectedCategory: string = this.cagories[0]

  constructor() {}

  segmentChanged(category: any) {
    console.log('Segment changed', category);
  }
}
