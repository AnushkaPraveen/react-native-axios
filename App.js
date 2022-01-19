import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Pressable,
  Button,
  Image,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import GetData from './src/getData';
import PostData from './src/postData';

function HomeScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Pressable
        style={styles.nav_button}
        onPress={() => navigation.navigate('GET Data')}>
        <Text style={styles.text}>GET</Text>
      </Pressable>
      <Pressable
        style={styles.nav_button}
        onPress={() => navigation.navigate('POST Data')}>
        <Text style={styles.text}>POST</Text>
      </Pressable>
    </View>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    /*  <GetData/>  */
    /*  <PostData/> */
    /*     <View>
<Text>Test</Text>
    </View> */
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="GET Data" component={GetData} />
        <Stack.Screen name="POST Data" component={PostData} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00A8E8',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 40,
    fontWeight: 'bold',
    color:'white'
  },
  button: {
    width: 100,
  },
  nav_button: {
    width: 200,
    height: 100,
    margin: 10,
    backgroundColor: '#232D36',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
});
