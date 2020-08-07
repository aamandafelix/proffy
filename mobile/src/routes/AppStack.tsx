import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native';

import Landing from '../pages/Landing';

const { Navigator, Screen} = createStackNavigator();

function AppStack() {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen name="Landing" component={Landing} />
      </Navigator>
    </NavigationContainer>
  );
}

export default AppStack;
