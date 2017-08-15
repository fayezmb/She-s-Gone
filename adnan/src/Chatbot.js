import React, { Component } from 'react';
import ChatBot from 'react-native-chatbot';
import {
  AppRegistry,
  StyleSheet,
  View
} from 'react-native';

const steps = [
  {
    id: '0',
    message: "Hey Dawg, I'm the AI on weed. My daddy is Fayez Barakji. He's a genius!",
    trigger: '1',
  },
  {
    id: '1',
    message: 'What is your name Mofo?',
    trigger: '2'
  },
    {
    id: '2',
    user: true,
    message: 'What is your name Mofo?',
    trigger: '3'
  },
  {
      id: '3',
      message: '{previousValue}, the name of a true jackass!',
      trigger: '4'
    },
     {
      id: '4',
      message: 'Are you a dude or dudette?',
      trigger: '5'
    },
     {
        id: '5',
        options: [
          { value: 1, label: 'dudette', trigger: '6' },
          { value: 2, label: 'dude', trigger: '7' },
          { value: 3, label: 'dudette but I look like a dude', trigger: '7' },
        ],
      },
      {
      id: '6',
      message: 'Did I mention that my sexy creator is single and has experience in being a boyfriend?',
      end:true
    },
    {
      id: '7',
      message: 'ewww..gaay. Bye.......................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................',
      end:true
    },
];


export default class App extends Component {
  render() {
    return (
      <View>
      <ChatBot steps={steps} />
      </View>
    );
  }
}
