const firebaseConfig = {
    apiKey: "AIzaSyDP7trE6GQDGoj4CQqaJ0bUKRAi8ZFFHqk",
    authDomain: "fir-auth-9fcef.firebaseapp.com",
    databaseURL: "https://fir-auth-9fcef.firebaseio.com",
    projectId: "fir-auth-9fcef",
    storageBucket: "fir-auth-9fcef.appspot.com",
    messagingSenderId: "3307734266",
    appId: "1:3307734266:web:779428bab9465b36f2f543"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const provider = new firebase.auth.GoogleAuthProvider();

// You can set the language, or use auto lang
// firebase.auth().languageCode = 'pt';
firebase.auth().useDeviceLanguage();

// Using a popup.
const provider = new firebase.auth.GoogleAuthProvider();
firebase.auth().signInWithPopup(provider).then(function (result) {
    // This gives you a Google Access Token.
    const token = result.credential.accessToken;

    // The signed-in user info.
    const user = result.user;

    console.log(user);
});