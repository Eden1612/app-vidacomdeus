import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import StackNavigator from './src/navigators/StackNavigator'
import DrawerNavigator from './src/navigators/DrawerNavigator';

const App = () => {
  return(
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}

export default App;
