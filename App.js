import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Alert, Pressable } from 'react-native';
import React, { useState } from 'react';
import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
//import MoodPage from './moodpage';

import { SelectList } from 'react-native-dropdown-select-list';
// Used dropdown-select-list from https://www.npmjs.com/package/react-native-dropdown-select-list

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name= "Home"
          component= {HomeScreen}
          options= {{title: 'Home'}}
        />
        <Stack.Screen name= "Mood Page" component={MoodScreen}/>
      </Stack.Navigator>
    </NavigationContainer>

  );
}
//export default function App() {

const [selected, setSelected] = React.useState("");

const data = [
    {key:'1', value:'Happy'},
    {key:'2', value:'Romantic'},
    {key:'3', value:'Sad'},
    {key:'4', value:'Relaxed'},
    {key:'5', value:'Hype'},
    {key:'6', value:'Studious'},
]

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.bigPurple}>What mood were you thinkin?</Text>
      <StatusBar style="auto"/>
      <SelectList
        setSelected={(val) => setSelected(val)}
        fontFamily= 'lato'
        data={data}
        search={false}
        boxStyles={{borderRadius: 9}}
        save="value"
        />
    </View>
  );
}


  //return (

  //);
//}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bigPurple: {
    color: 'lavender',
    fontWeight: 'bold',
    fontSize: 30,
  }
});

const MoodScreen = ({navigation}) => {
  return <Text>HI</Text>;
};
