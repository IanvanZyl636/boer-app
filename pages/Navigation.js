import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './Home';
import FarmSection from './FarmSection';

const Stack = createNativeStackNavigator();

function Navigation() {
  return (
    <NavigationContainer initialRouteName={Home}>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="FarmSection" component={FarmSection} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
