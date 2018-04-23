# Gaia - Chatbot application for people with Alzheimer's

January 2018 - Today

Chatbot mobile app made with Ionic, using the dialogflow API and firebase.

## Video
Video of what the app looks like for now:
https://youtu.be/q0h4v9mNRNA

/!\ It's not finished yet.

## Blog posts

- [Ep. 0: Meet Gaia](https://agirlintech.com/2017/12/11/gaia-ep0/)
- [Ep. 1: First decisions](https://agirlintech.com/2017/12/23/gaia-ep1/)
- [Ep. 2: Getting started with Dialogflow](https://agirlintech.com/2018/01/08/gaia-ep2/)
- [Ep. 3: Talk to Gaia, she can understand you](https://agirlintech.com/2018/02/22/gaia-ep3/)
- [Ep. 4: My chatbot is getting smarter!](https://agirlintech.com/2018/04/01/gaia-ep4/)

## Run it on your device

1. Install [node.js](http://nodejs.org/) & [Ionic Framework](http://ionicframework.com/)

2. Create a new project on [firebase](https://console.firebase.google.com/)

3. Click on "Add Firebase to your web app" in the firebase console

4. Copy these lines
```
var config = {
    apiKey: "XXXXXXXXXXXX",
    authDomain: "XXXXXXXXXXXX",
    databaseURL: "XXXXXXXXXXXX",
    projectId: "XXXXXXXXXXXX",
    storageBucket: "XXXXXXXXXXXX",
    messagingSenderId: "XXXXXXXXXXXX"
  };
```

5. In the src/app folder, create a new file (app.firebase.config.ts) and paste your credentials like
```
export const FIREBASE_CONFIG = {
    apiKey: "XXXXXXXXXXXX",
    authDomain: "XXXXXXXXXXXX",
    databaseURL: "XXXXXXXXXXXX",
    projectId: "XXXXXXXXXXXX",
    storageBucket: "XXXXXXXXXXXX",
    messagingSenderId: "XXXXXXXXXXXX"
  };
```

6. Go into the application folder, open a terminal and run
```bash
npm install
```

7. Plug your phone and run
```bash
ionic cordova run platform
```
If you have an android, platform = android.
If you have an iPhone, platform = ios.
