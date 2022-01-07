import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Authentication from './pages/Authentication';

export default function App() {
  return (
    <NavigationContainer>
      <Authentication />
    </NavigationContainer>
  );
}
