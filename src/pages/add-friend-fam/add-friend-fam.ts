import { Component, NgZone } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, DateTime } from 'ionic-angular';
import { FriendsFam } from '../../models/friendsfam.model';
import { FriendsfamService } from '../../services/friendsfam.service';
import { Camera, CameraOptions } from '@ionic-native/camera';
import firebase from 'firebase';
import { FileChooser } from '@ionic-native/file-chooser';
import { File } from '@ionic-native/file';

@IonicPage()
@Component({
  selector: 'page-add-friend-fam',
  templateUrl: 'add-friend-fam.html',
})


export class AddFriendFamPage {

  ff: FriendsFam = {
    name:'',
    relation:'',
    photo:'assets/imgs/noPhoto.jpg'
}

public cameraImage:string;

  constructor(public view: ViewController, private FriendsFamList: FriendsfamService, public navParams: NavParams,private camera:Camera, private fileChooser: FileChooser, private file:File) {

  }

  addFriendFam(){
    this.FriendsFamList.addFriendfam(this.ff);
    this.closeModal();
  }

  closeModal(){
    this.view.dismiss();
  }

  async takePhoto(){

    try{
      const options: CameraOptions = {
        quality:80,
        targetHeight:1000,
        targetWidth:720,
        destinationType:this.camera.DestinationType.DATA_URL,
        encodingType:this.camera.EncodingType.JPEG,
        mediaType:this.camera.MediaType.PICTURE,
        correctOrientation:true
      }

      const result = await this.camera.getPicture(options);
      const image = `data:image/jpeg;base64,${result}`;
      var name = "PICG_";
      var time = Date.now();
      name+=time;
      name+=".jpg";
      const path = 'pictures/friendsfam/camera/'
      const pictures = firebase.storage().ref( path + name);
      pictures.putString(image,'data_url').then((savedPicture) =>
      {
        this.ff.photoPath = path+name;
        this.ff.photo = savedPicture.downloadURL;
      });
    }
    catch(e){
      console.error(e);
    }

  }

  uploadPhoto(){

   this.fileChooser.open().then((uri)=>{
        this.file.resolveLocalFilesystemUrl(uri).then((newUrl)=>{
          let dirPath = newUrl.nativeURL;
          let dirPathSegments = dirPath.split('/');
          dirPathSegments.pop();
          dirPath = dirPathSegments.join('/');
          this.file.readAsArrayBuffer(dirPath,newUrl.name).then(async (buffer)=>{
            await this.upload(buffer,newUrl.name);
          })
        })
    })

      // Create a root reference
var storageRef = firebase.storage().ref('pictures/friendsfam/upload/' + name);


  }



  async upload(buffer,name){

    let blob = new Blob([buffer],{type: "image/jpeg"});
    firebase.storage().ref('pictures/friendsfam/upload/' + name).put(blob).then((d)=>{
      alert("Upload Successful");
    }).catch((e)=>{
      alert(JSON.stringify(e));
  });

}


}
