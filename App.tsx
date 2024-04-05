import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
// import {createStackNavigator} from 'react-navigation';
import { createStackNavigator } from '@react-navigation/stack';

import { Text, View } from 'react-native'
import { extendTheme, NativeBaseProvider, } from "native-base";
import Splash from './src/screens/pages/host/splash';
import Host from './src/screens/pages/host/host';
import GameOptions from './src/screens/pages/host/gameOptions';
import JoinOptions from './src/screens/pages/host/joinOptions';
import Politician from './src/screens/pages/game/politician/politician';
import Outloud from './src/screens/pages/game/politician/outloud';
import Question from './src/screens/pages/game/politician/question';
import Answers from './src/screens/pages/game/politician/answers';
const Stack: any = createStackNavigator();

const App = (navigation: any) => {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='Splash' component={Splash} options={{ headerShown: false }} />
          <Stack.Screen name='Host' component={Host} options={{ headerShown: false }} />
          <Stack.Screen name='GameOptions' component={GameOptions} options={{ headerShown: false }} />
          <Stack.Screen name='JoinOptions' component={JoinOptions} options={{ headerShown: false }} />
          <Stack.Screen name='Politician' component={Politician} options={{ headerShown: false }} />
          <Stack.Screen name='Outloud' component={Outloud} options={{ headerShown: false }} />
          <Stack.Screen name='Question' component={Question} options={{ headerShown: false }} />
          <Stack.Screen name='Answers' component={Answers} options={{ headerShown: false }} />

          {/* <Stack.Screen name='Lobbyist' component={Lobbyist} options={{ headerShown: false }} /> */}

        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  )
}
export default App;
