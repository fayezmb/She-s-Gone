import React, { Component } from 'react';
import { Container, Header, Content, Button, Text, Body, Grid, Col } from 'native-base';
import {
  AppRegistry,
  StyleSheet,
  StatusBar,
  Dimensions,
  View
} from 'react-native';
import { Actions } from 'react-native-router-flux';

 const { height: screenHeight } = Dimensions.get('window');

export default class adnan extends Component {
  render() {
    return (
      <Container style={{ marginTop: -100 }}>
      <StatusBar hidden />

      <Content contentContainerStyle={{ flex: 1 }} style={{ padding: 10 }}>

      <View style={styles.container}>
      <Text style={styles.instructions}>
      {'\n'}
      {'\n'}
      {'\n'}
      {'\n'}
      She&#39;s Gone{'\n'}
      </Text>

      <Button
      style={{ marginBottom: 5, width: 150, alignSelf: 'center', justifyContent: 'center' }}
      rounded
      info
      onPress={Actions.Chatbot}
      >
      <Text>New Story</Text>
      </Button>

      <Button
      style={{ width: 150, alignSelf: 'center', justifyContent: 'center', marginBottom: 50 }}
      disabled
      rounded
      onPress={Actions.Chatbot}
      >
      <Text style={{ alignSelf: 'center' }}>Continue</Text>
      </Button>


      <Text style={styles.welcome}>
      Written by Poojitha Pillamari{'\n'}
      Edited by Fayez Barakji{'\n'}
      A Game by CG-Interactive
      </Text>


      <Button
      style={{ width: 150, alignSelf: 'center', justifyContent: 'center' }}
      transparent
      success
      onPress={Actions.About}
      >
      <Text style={{ alignSelf: 'center' }}>About</Text>
      </Button>
      </View>

      </Content>

      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: screenHeight,
    alignItems: 'center',
    justifyContent: 'center'
  },
  welcome: {
    fontSize: 20,
    marginTop: 80,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 50,
    marginTop: -80,
    fontSize: 40,
    fontFamily: 'Roboto'
  },
});
