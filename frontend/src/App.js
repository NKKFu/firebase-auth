import React, { useState } from 'react';

import LoginButton from './LoginButton'

import firebase from 'firebase/app';
import 'firebase/auth';

// Icons
import GoogleIcon from './icons/google.png'
import GithubIcon from './icons/github.png'
import LogoutIcon from './icons/logout.png'

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

const Auth = firebase.auth();

function App() {
  const [user, setUser] = useState();

  function login(provider) {
    // You can set the language, or use auto lang
    // Auth.languageCode = 'pt';
    Auth.useDeviceLanguage();

    let loginMethod;
    switch (provider) {
      case 'google':
        loginMethod = new firebase.auth.GoogleAuthProvider();
        break;
      case 'github':
        loginMethod = new firebase.auth.GithubAuthProvider();
        loginMethod.addScope('repo');
        break;
      default:
        // Do nothing
        break;
    }

    loginMethod.setCustomParameters({
      prompt: 'select_account'
    });

    Auth.signInWithPopup(loginMethod).then((result) => {
      // This gives you a Google Access Token.
      // const token = result.credential.accessToken;

      // The signed-in user info.
      onAuthStateChanged(result.user);
    }).catch((error) => {
      console.warn(`Error on logout -> ${error}`);
    });
  }

  function logout() {
    Auth.signOut()
      .then(function () {
        onAuthStateChanged();
      })
      .catch(function (error) {
        console.error(error);
      });
  }

  function onAuthStateChanged(user) {
    setUser(user);

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
  };

  return (
    <div className="App">
      {user && <h1> {`Usuário atual: ${user.displayName}`} </h1>}

      <header className="App-header">
        {!user &&
          <>
            <LoginButton
              icon={GithubIcon}
              click={() => login('github')}
              provider="Entrar com o Github" />
            <LoginButton
              icon={GoogleIcon}
              click={() => login('google')}
              provider="Entrar com conta Google" />
          </>}
          
        {user && <LoginButton
          icon={LogoutIcon}
          click={() => logout()}
          provider="Fazer logout" />}
      </header>
    </div >
  );
}

export default App;