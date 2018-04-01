import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { FriendsFam } from '../../models/friendsfam.model';
import { FriendsfamService } from '../../services/friendsfam.service';
import { Camera } from '@ionic-native/camera';

@Component({
  selector: 'page-familyfriends',
  templateUrl: 'familyfriends.html'
})
export class FamilyFriendsPage {

  
  friendsfamList$:Observable<FriendsFam[]>;

  constructor(public navCtrl: NavController,private FriendsFamList: FriendsfamService, private modal:ModalController, private camera:Camera) {

    this. friendsfamList$ = this.FriendsFamList.getFriendsfam().snapshotChanges().map(
      changes => { return changes.map( c=> ({
        key:c.payload.key, ...c.payload.val()})
      )});


  }

  openAddFriendFam(){
    const modalAddFriendfam = this.modal.create("AddFriendFamPage");
    modalAddFriendfam.present();
  }

  openFriendFam(f:FriendsFam){
    const modalEditFriendfam = this.modal.create("EditFriendFamPage",{data: f});
    modalEditFriendfam.present();
  }

}
