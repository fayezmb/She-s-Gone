import React, { Component } from 'react';
import { Container, Header, Content, Button, Text, Body } from 'native-base';
import {
  AppRegistry,
  StyleSheet,
  View
} from 'react-native';
import { Actions } from 'react-native-router-flux';
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
          She's Gone{"\n"}
        </Text>
         <Body>
        <Button rounded info onPress={Actions.Chatbot}>
            <Text>New Story</Text>
          </Button>
         <Button disabled rounded onPress={Actions.Chatbot}>
            <Text>Continue</Text>
         </Button>
         </Body>
        <Text style={styles.welcome}>
          Written by Poojitha Pillamari{"\n"}
          Edited by Fayez Barakji{"\n"}
          A Game by CG-Interactive
        </Text>
        <Body>
        <Button transparent success onPress={Actions.About}>
            <Text>About</Text>
          </Button>
          </Body>
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
     fontSize: 20
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
     fontSize: 40,
     fontFamily: 'Roboto'
  },
});
