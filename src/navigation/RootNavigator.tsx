import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import AthleteListScreen from '../athletes/AthleteListScreen';
import AthleteDetailScreen from '../athletes/AthleteDetailScreen';
import LoginScreen from '../login/LoginScreen';

const RootStack = createStackNavigator();

const RootStackScreen = ({}) => (
  <RootStack.Navigator>
    <RootStack.Screen
      name={'Splash'}
      component={LoginScreen}
      options={{
        headerShown: false,
      }}
    />
    <RootStack.Screen
      name={'List of Athletes'}
      component={AthleteListScreen}
      options={{
        headerBackTitle: 'Logout',
        headerStyle: {
          backgroundColor: '#2B53B2',
        },
        headerTintColor: '#fff',
      }}
    />
    <RootStack.Screen
      name={'Athlete Details'}
      component={AthleteDetailScreen}
      options={{
        headerBackTitle: 'List',
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
      }}
    />
  </RootStack.Navigator>
);

export default RootStackScreen;
