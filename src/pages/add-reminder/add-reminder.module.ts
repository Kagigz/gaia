import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddReminderPage } from './add-reminder';

@NgModule({
  declarations: [
    AddReminderPage,
  ],
  imports: [
    IonicPageModule.forChild(AddReminderPage),
  ],
})
export class AddReminderPageModule {}
