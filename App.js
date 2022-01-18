import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';

import { Provider } from 'react-redux';


import store from './src/store';
import CountingApp from './src/CountingApp';



export default function App() {
  return (
    <Provider store={store}>
        <CountingApp/>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 100,
    fontWeight: "bold"
  },
  button: {
    width: 100,
    height: 50,
    margin: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    borderColor: "black",
    borderStyle: "solid",
    borderWidth: 2
  }
});