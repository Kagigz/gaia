import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import {Camera} from '@ionic-native/camera';
import {FileChooser} from "@ionic-native/file-chooser";
import {File} from "@ionic-native/file";

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { HomeConvPage } from '../pages/homeConv/homeConv';
import { HomeInteractPage } from '../pages/homeInteract/homeInteract';
import { FamilyFriendsPage } from '../pages/familyfriends/familyfriends';
import { PlanningPage } from '../pages/planning/planning';
import { RemindersPage } from '../pages/reminders/reminders';

import {TextToSpeech} from '@ionic-native/text-to-speech';
import { ReminderService } from '../services/reminders.service';
import { FriendsfamService } from '../services/friendsfam.service';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { FIREBASE_CONFIG } from './app.firebase.config';
import firebase from 'firebase';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    FamilyFriendsPage,
    PlanningPage,
    RemindersPage,
    HomeInteractPage,
    HomeConvPage
  ],
  imports: [
    BrowserModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    FamilyFriendsPage,
    PlanningPage,
    RemindersPage,
    HomeInteractPage,
    HomeConvPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    TextToSpeech,
    ReminderService,
    FriendsfamService,
    Camera,
    FileChooser,
    File,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
