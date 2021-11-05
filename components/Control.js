import {StyleSheet, TextInput, Image, Button, Pressable} from 'react-native';

import * as React from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Memo from './Memo';
import UserList from './UserList';
import Summery from './Summery';

function UserScreen() {
  return <UserList/>}

function MmeoScreen() {
  return <Memo/>}

function SummeryScreen() {
  return <Summery/>}

const Tab = createMaterialTopTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
    tabBarOptions={{style:{backgroundColor: 'yellow'}}}
      initialRouteName="Feed"
      screenOptions={{
        tabBarActiveTintColor: 'white',
        tabBarInactiveTintColor:"black",
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '900',
          backgroundColor: '#c4c1c0',
          paddingTop: 10,
          borderRadius: 20,
          paddingBottom:10,
          paddingLeft:20,
          paddingRight:20
        },
        tabBarStyle: {backgroundColor: 'white'},

      }}>
      <Tab.Screen
        name="Summery"
        component={SummeryScreen}
        options={{tabBarLabel: 'Summey'}}
      />
      <Tab.Screen
        name="Users"
        component={UserScreen}
        options={{tabBarLabel: 'Users'}}
      />
      <Tab.Screen
        name="Memos"
        component={MmeoScreen}
        options={{tabBarLabel: 'Memos'}}
      />
    </Tab.Navigator>
  );
}
export default function User() {
  return (
    <NavigationContainer independent={true}>
      <MyTabs />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 7,
    paddingHorizontal: 9,
    borderRadius: 12,
    elevation: 3,
    backgroundColor: 'gray',
    width: 60,
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  summery: {
    width: 110,
    borderRadius: 20,
    paddingHorizontal: 10,
  },
  user: {
    width: 80,
    borderRadius: 20,
    paddingHorizontal: 10,
  },
  memo: {
    width: 90,
    borderRadius: 20,
    paddingHorizontal: 10,
  },
});
