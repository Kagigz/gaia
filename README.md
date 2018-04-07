# Gaia - Chatbot application for people with Alzheimer's

Video of what the app looks like for now:
https://youtu.be/q0h4v9mNRNA

/!\ It's not finished yet.

## Run it on your device

1. Install [node.js](http://nodejs.org/)

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

5. In the src folder, create a new file (firebase_config.ts) and paste your credentials 

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
