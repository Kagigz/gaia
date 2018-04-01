import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditReminderPage } from './edit-reminder';

@NgModule({
  declarations: [
    EditReminderPage,
  ],
  imports: [
    IonicPageModule.forChild(EditReminderPage),
  ],
})
export class EditReminderPageModule {}
