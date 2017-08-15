import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';
import { Container, Header, Content, Button, Text, Body } from 'native-base';
import MainPage from './MainPage.js';
import About from './About.js';
import Chatbot from './Chatbot.js';

export default class App extends Component {
  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene key="MainPage" hideNavBar component={MainPage} title="Main Page" initial /> 
          <Scene key="About" component={About} hideNavBar />
          <Scene key="Chatbot" component={Chatbot} hideNavBar />
        </Scene>
      </Router>
    );
  }
}
