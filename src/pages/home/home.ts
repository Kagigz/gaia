import { Component } from '@angular/core';
import { NavController, Content, Platform } from 'ionic-angular';

import { HomeConvPage } from '../homeConv/homeConv';
import { HomeInteractPage } from '../homeInteract/homeInteract';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

@Component({
  templateUrl: 'home.html'
})
export class HomePage {

  tab1Root = HomeInteractPage;
  tab2Root = HomeConvPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      statusBar.styleDefault();

      splashScreen.hide();
    });
  }
}
