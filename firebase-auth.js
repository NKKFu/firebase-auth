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
provider.setCustomParameters({
    prompt: 'select_account'
});

// You can set the language, or use auto lang
// firebase.auth().languageCode = 'pt';
firebase.auth().useDeviceLanguage();

function login() {
    firebase.auth().signInWithPopup(provider).then((result) => {
        // This gives you a Google Access Token.
        const token = result.credential.accessToken;

        // The signed-in user info.
        const user = result.user;

        console.log(user);
    }).catch((error) => {
        switch (error.code) {
            case "auth/operation-not-supported-in-this-environment":
                console.error(error);
                console.warn(`This problem occurs when your environment is static and not on live`);
                break;
            case "auth/unauthorized-domain":
                console.error(error);
                console.warn(`This problem occurs when your environment isn't on IP whitelist`);
                break;
            default:
                console.error(error);
                break;
        }
    });
}

function logout() {
    firebase.auth().signOut()
        .then(function () {
            alert('Logut realizado com sucesso');
        })
        .catch(function (error) {
            console.error(error);
        });
}

firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        console.log(`User logged -> ${user.displayName}`);
    } else {
        console.log('User not logged');
    }

    /* Another proprieties */
    // name = user.displayName;
    // email = user.email;
    // photoUrl = user.photoURL;
    // emailVerified = user.emailVerified;
    // uid = user.uid;
});