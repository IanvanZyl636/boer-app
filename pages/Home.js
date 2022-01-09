import * as React from 'react';
import {Text, View, Button} from 'react-native';
import auth from '@react-native-firebase/auth';

export default function Home({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Farm Section"
        onPress={() => navigation.navigate('FarmSection')}
      />
      <View style={{marginTop: 30}}>
        <Button title="Signout" onPress={() => auth().signOut()} />
      </View>
    </View>
  );
}
