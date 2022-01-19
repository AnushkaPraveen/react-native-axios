import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Pressable,
  Button,
  Image
} from 'react-native';
import GetData from './src/getData';
import PostData from './src/postData';

export default function App() {
 
  return (
   /*  <GetData/>  */ 
  <PostData/>
/*     <View>
<Text>Test</Text>
    </View> */
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
    fontSize: 40,
    fontWeight: 'bold',
  },
  button: {
    width: 100,
  },
});
