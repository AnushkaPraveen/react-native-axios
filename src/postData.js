import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Pressable,
  Button,
  Image,
  FlatList,
  TextInput,
} from 'react-native';
import axios from 'axios';

export default function PostData() {
  const [data, SetData] = useState([]);
  const [name, SetName] = useState('');
  const [email, SetEmail] = useState('');
  const [city, SetCity] = useState('');
  console.log(data);

  const onChangeName = e => {
    SetName(e);
    console.log(e);
  };

  const onChangeEmail = e => {
    SetEmail(e);
    console.log(e);
  };

  const onChangeCity = e => {
    SetCity(e);
    console.log(e);
  };

  const postData = () => {
    /* fetch('https://jsonplaceholder.typicode.com/posts',  */
    axios
      .post('https://jsonplaceholder.typicode.com/posts', {
        name: name,
        city: city,
        email: email,
      })
      .then(response => SetData(response.data));
  };

  return (
    <View style={styles.container}>
      <Text>Fill below sections</Text>
      <Text style={styles.input_text}>Name</Text>
      <TextInput style={styles.input} onChangeText={onChangeName} />
      <Text style={styles.input_text}>Email</Text>
      <TextInput style={styles.input} onChangeText={onChangeEmail} />
      <Text style={styles.input_text}>City</Text>
      <TextInput style={styles.input} onChangeText={onChangeCity} />
      <View style={styles.button}>
        <Button title="Submit Data" onPress={postData}></Button>
      </View>

      {data.length != 0 ? (<View>
          <Text style={styles.display_text}>Your Submited Data</Text>
          <Text style={styles.text}>Name - {name}</Text>
          <Text style={styles.text}>Email - {email}</Text>
          <Text style={styles.text}>City - {city}</Text>
        </View>): null}
        
      
    </View>
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
    fontSize: 25,
    fontWeight: 'bold',
  },
  button: {
    width: 100,
  },
  input: {
    borderWidth: 1,
    padding: 10,
    margin: 10,
    textAlign: 'center',
    width: 200,
    fontSize:20
  },
  input_text: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  display_text:{
      textAlign:'center',
      marginTop:25
  }
});
