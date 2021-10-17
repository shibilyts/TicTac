import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useSelector } from 'react-redux';

import { navigationRef } from './NavigationService';

import Login from 'app/screens/Login';
import Home from 'app/screens/Home';
import ScoreBoard from '../screens/ScoreBoard';
import  MaterialIcons  from 'react-native-vector-icons/MaterialIcons';
import AppStyles from '../config/styles';

const Stack = createStackNavigator();

const homeOptions = {
  title: 'TicTac',
  headerStyle: {
    backgroundColor: '#f4511e',
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
};

function App() {
  const isLoggedIn = useSelector(state => state.loginReducer.isLoggedIn);

  return (
    <NavigationContainer ref={navigationRef}>
      {isLoggedIn ? (
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} options={homeOptions} />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator>
          <Stack.Screen
            name="Login"
            component={Login}
            options={{
              title: 'TicTac',
              headerStyle: {
                backgroundColor: '#f4511e',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
              animationTypeForReplace: isLoggedIn ? 'push' : 'pop',
            }}
          />
          <Stack.Screen
            name="ScoreBoard"
            component={ScoreBoard}
            options={{
              title: 'Scores',
              headerStyle: {
                backgroundColor: '#f4511e',
              },
              headerBackTitle: ' ',
              headerBackImage: () => (
                <MaterialIcons
                  size={30}
                  name="arrow-back"
                  color={AppStyles.color.COLOR_WHITE}
                  style={{ marginLeft: 10 }}
                />
              ),
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
              animationTypeForReplace: isLoggedIn ? 'push' : 'pop',
            }}
          />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}

export default App;
