import { Component } from '@angular/core';
import { IonicPage, NavParams, ViewController } from 'ionic-angular';
import { Reminder } from '../../models/reminder.model';
import { ReminderService } from '../../services/reminders.service';

@IonicPage()
@Component({
  selector: 'page-add-reminder',
  templateUrl: 'add-reminder.html',
})
export class AddReminderPage {

  rem: Reminder = {
    title:'',
}

  constructor(public view: ViewController, private ReminderList: ReminderService, public navParams: NavParams) {
  }

  addReminder(){
    this.ReminderList.addReminder(this.rem);
    this.closeModal();
  }

  closeModal(){
    this.view.dismiss();
  }
}
