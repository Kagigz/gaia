import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "angularfire2/database";
import { Reminder } from "../models/reminder.model";

@Injectable()

export class ReminderService{

    private reminderRef = this.db.list<Reminder>('reminders');

    constructor(private db: AngularFireDatabase){

    }

    getReminders(){
        return this.reminderRef;
    }

    addReminder(rem: Reminder){
        this.reminderRef.push(rem);
    }

    editReminder(rem:Reminder){
        return this.reminderRef.update(rem.key,rem);
    }

    removeReminder(rem:Reminder){
        return this.reminderRef.remove(rem.key);
    }
    
} 