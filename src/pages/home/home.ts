import { Component } from '@angular/core';
import { NavController, Content } from 'ionic-angular';

import { HomeConvPage } from '../homeConv/homeConv';
import { HomeInteractPage } from '../homeInteract/homeInteract';

@Component({
  templateUrl: 'home.html'
})
export class HomePage {

  tab1Root = HomeInteractPage;
  tab2Root = HomeConvPage;

  constructor() {

  }
}
