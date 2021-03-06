import { Component, NgZone, ViewChild } from '@angular/core';
import { NavController, Content } from 'ionic-angular';
import {TextToSpeech} from '@ionic-native/text-to-speech';

@Component({
  selector: 'page-homeConv',
  templateUrl: 'homeConv.html'
})

export class HomeConvPage {

  messages:any[] = [];
  text: string = "";
  @ViewChild(Content) content:Content;

  constructor(public navCtrl: NavController, public ngZone:NgZone, public tts:TextToSpeech) {

  }

  sendText(){

    let message = this.text;

    this.messages.push({
      text:message,
      sender:"me"
    });
    this.content.scrollToBottom(200);

    this.text = "";

    window["ApiAIPlugin"].requestText({
      query: message
    },(response)=>{

      this.ngZone.run(()=>{
        this.messages.push({
          text:response.result.fulfillment.speech,
          sender:"api"
        });
        this.content.scrollToBottom(200);
      })

    },(error)=>{
      alert(JSON.stringify(error))
    })
  }

  sendVoice(){
    window["ApiAIPlugin"].requestVoice({},
    (response)=>{
      this.ngZone.run(()=>{
        this.messages.push({
          text:response.result.fulfillment.speech,
          sender:"api"
        });
        this.content.scrollToBottom(200);
      })
      this.tts.speak({
        text:response.result.fulfillment.speech,
        locale:"en-US",
        rate: 1
      })
    }, (error)=>{
      alert(error)
    })
  }

}
