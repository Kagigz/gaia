import { Component, ViewChild } from '@angular/core';
import { Nav,Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { FamilyFriendsPage } from '../pages/familyfriends/familyfriends';
import { PlanningPage } from '../pages/planning/planning';
import { RemindersPage } from '../pages/reminders/reminders';

declare var window;

@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  @ViewChild(Nav) nav: Nav;

  rootPage:any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();

      this.pages = [
        { title: 'Home', component: HomePage },
        { title: 'Family & Friends', component: FamilyFriendsPage },
        { title: 'Planning', component: PlanningPage },
        { title: 'Reminders', component: RemindersPage }
      ];

      window["ApiAIPlugin"].init(
        {
            clientAccessToken: "38ab822b8c414cb29881f14c56f2a121", // insert your client access key here
            lang: "en" // set lang tag from list of supported languages
        },
        function(result) { alert(result) },
        function(error) { alert(error) }
    );

    });
  }

  openPage(page) {
    this.nav.setRoot(page.component);
  }

}
