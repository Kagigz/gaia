import { Component } from '@angular/core';
import { IonicPage,NavParams, ViewController } from 'ionic-angular';
import { Reminder } from '../../models/reminder.model';
import { ReminderService } from '../../services/reminders.service';

@IonicPage()
@Component({
  selector: 'page-edit-reminder',
  templateUrl: 'edit-reminder.html',
})
export class EditReminderPage {

  rem: Reminder = {
    title:'',
  }

  constructor(public view: ViewController,  private ReminderList: ReminderService, public navParams: NavParams) {
  }

  ionViewWillLoad(){
    const data = this.navParams.get('data');
    this.rem = data;
  }

  deleteReminder(){
    this.ReminderList.removeReminder(this.rem);
    this.closeModal();
  }

  editReminder(){
    this.ReminderList.editReminder(this.rem);
    this.closeModal();
  }

  closeModal(){
    this.view.dismiss();
  }
}
