/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, { Component } from "react";
import { AppRegistry, View, Text, StyleSheet } from "react-native";

export default class HelloWorld extends Component {
  render () {
    return (
      <View style = {styles.container}>
        <Text style = {styles.welcome}>
          West Ham United!! COYI
          </Text>
      </View>)
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  welcome: {
    fontSize: 25,
    textAlign: 'center'
  }
});


AppRegistry.registerComponent("HouseShare", () => HelloWorld);
