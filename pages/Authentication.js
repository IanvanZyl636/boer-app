import React, {useState} from 'react';
import auth from '@react-native-firebase/auth';
import {StyleSheet, Text, View} from 'react-native';
import {
  GoogleSigninButton,
  GoogleSignin,
} from '@react-native-google-signin/google-signin';
import Navigation from './Navigation';
import {FIREBASE_WEB_CLIENT_ID} from '@env';

export default function Authentication() {
  const [authenticated, setAuthenticated] = useState(false);

  auth().onAuthStateChanged(user => {
    if (user) {
      setAuthenticated(true);
    } else {
      setAuthenticated(false);
    }
  });

  async function onGoogleButtonPress() {
    GoogleSignin.configure({
      webClientId: FIREBASE_WEB_CLIENT_ID,
    });

    const {idToken} = await GoogleSignin.signIn();

    const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    return auth().signInWithCredential(googleCredential);
  }

  if (authenticated) {
    return <Navigation />;
  }

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Google Authentication</Text>
      <GoogleSigninButton onPress={onGoogleButtonPress} />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 25,
    marginBottom: 30,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    backgroundColor: '#4630eb',
    borderRadius: 4,
    padding: 12,
    marginVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
  },
});
