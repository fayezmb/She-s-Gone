import React, { Component } from 'react';
import { Container, Header, Content, Button, Text, Body } from 'native-base';
import {
  AppRegistry,
  StyleSheet,
  View
} from 'react-native';

export default class adnan extends Component {
  render() {
    return (
    <Container>
        <Header />
        <Content>
      <View style={styles.container}>
        <Text style={styles.instructions}>
        {"\n"}
        {"\n"}
        {"\n"}
        {"\n"}
          She&#39;s Gone{"\n"}
        </Text>
        <Text style={styles.welcome}>
          Written by Poojitha Pillamari{"\n"}
          Edited by Fayez Barakji{"\n"}
          A Game by CG-Interactive{"\n"}
          For suggestions and complaints: info@cg-interactive.com
        </Text>
        <Body />

      </View>
         </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
     fontSize: 40,
     fontFamily: 'Roboto'
  },
});
