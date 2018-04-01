import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { AngularFireList } from 'angularfire2/database';
import { Reminder } from '../../models/reminder.model';
import { ReminderService } from '../../services/reminders.service';
import { Observable } from 'rxjs/Observable';



@Component({
  selector: 'page-reminders',
  templateUrl: 'reminders.html'
})

export class RemindersPage {

    remList$:Observable<Reminder[]>;

  constructor(public navCtrl: NavController,private ReminderList: ReminderService, private modal:ModalController) {

    this.remList$ = this.ReminderList.getReminders().snapshotChanges().map(
      changes => { return changes.map( c=> ({
        key:c.payload.key, ...c.payload.val()})
      )});


  }

  openAddReminder(){
    const modalAddReminder = this.modal.create("AddReminderPage");
    modalAddReminder.present();
  }

  openReminder(r:Reminder){
    const modalEditReminder = this.modal.create("EditReminderPage",{data: r});
    modalEditReminder.present();
  }


}
