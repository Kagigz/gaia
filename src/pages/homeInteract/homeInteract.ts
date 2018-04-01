import { Component, NgZone, ViewChild } from '@angular/core';
import { NavController, Content } from 'ionic-angular';
import {TextToSpeech} from '@ionic-native/text-to-speech';

@Component({
  selector: 'page-homeInteract',
  templateUrl: 'homeInteract.html'
})

export class HomeInteractPage {

  messageAPI: string = "";
  text: string = "";
  @ViewChild(Content) content:Content;

  constructor(public navCtrl: NavController, public ngZone:NgZone, public tts:TextToSpeech) {
  }

  sendText(){

    let message = this.text;

    this.text = "";

    window["ApiAIPlugin"].requestText({
      query: message
    },(response)=>{

      this.tts.speak({
        text:response.result.fulfillment.speech,
        locale:"en-US",
        rate: 1
      })

      this.ngZone.run(()=>{
        this.messageAPI = response.result.fulfillment.speech;
      })

    },(error)=>{
      alert(JSON.stringify(error))
    })
  }

  sendVoice(){
    window["ApiAIPlugin"].requestVoice({},
    (response)=>{
      this.tts.speak({
        text:response.result.fulfillment.speech,
        locale:"en-US",
        rate: 1
      })
      this.ngZone.run(()=>{
        this.messageAPI = response.result.fulfillment.speech;
      })
    }, (error)=>{
      alert(error)
    })
  }

}
