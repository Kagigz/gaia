'use strict';
const functions = require('firebase-functions');
const {WebhookClient} = require('dialogflow-fulfillment');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

exports.webhook = functions.https.onRequest((request, response) => {

  const agent = new WebhookClient({ request, response });

  let intentMap = new Map();
  intentMap.set('Reminder', addReminder);
  intentMap.set('WhoIs', answerWho);
  agent.handleRequest(intentMap);
  

    function addReminder(agent){

      let params = request.body.result.parameters;

      const rem = params.thingToDo;
      const d = params.deadline;
    
      admin.database().ref('/reminders').push({title:rem,deadline:d});
      agent.add(`The reminder "${rem}" has been added.`);
    }



    function answerWho(agent){

      let params = request.body.result.parameters;

      admin.database().ref('/friendsfam').orderByChild('name').equalTo(params.nameWho).on('value', function(snapshot) {
        var speech;
         var relation;

        if (snapshot.val()){
          snapshot.forEach(function(ff) {
            relation = ff.val().relation;
          });
          agent.add(`${params.nameWho} is your ${relation}.`);
        }
        else{
          agent.add(`Sorry, I don't know who ${params.nameWho} is.`);
        }

      });

      //admin.database().ref('/friendsfam').off();

    }

  });