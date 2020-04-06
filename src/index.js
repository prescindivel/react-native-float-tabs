import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import Home from './screens/Home';
import Profile from './screens/Profile';
import Settings from './screens/Settings';

import TabBar from './components/TabBar';

const { Navigator, Screen } = createBottomTabNavigator();

const App = () => (
  <>
    <StatusBar barStyle="dark-content" backgroundColor="white" />
    <SafeAreaProvider>
      <NavigationContainer>
        <Navigator tabBar={(props) => <TabBar {...props} />}>
          <Screen name="Home" component={Home} options={{ icon: 'home' }} />
          <Screen
            name="Profile"
            component={Profile}
            options={{ icon: 'account' }}
          />
          <Screen
            name="Settings"
            component={Settings}
            options={{ icon: 'settings' }}
          />
        </Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  </>
);

export default App;
