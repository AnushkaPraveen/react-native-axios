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
  ScrollView,
} from 'react-native';
import axios from 'axios';

export default function GetData() {
  const [data, SetData] = useState([]);
  const [alldata, SetAllData] = useState([]);
  const [id, SetId] = useState(0);
  console.log(data);

  const onChangeId = e => {
    SetId(e);
    console.log(e);
  };

  const getData = () => {
    axios
      .get('https://jsonplaceholder.typicode.com/users/' + id)
      .then(response => {
        SetData(response.data);
      });
  };

  const getAllData = () => {
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        SetAllData(response.data);
      })
      .catch(error => console.error(error));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.topic}>Enter the ID</Text>
      <TextInput style={styles.input} onChangeText={onChangeId} />
      <View style={styles.button}>
        <Button title="Get User Data" onPress={getData}></Button>
      </View>
      {data.length == 0 ? null : (
        <View>
          <Text style={styles.text}>User ID - {data.id}</Text>
          <Text style={styles.text}>Name - {data.name}</Text>
          <Text style={styles.text}>Email - {data.email}</Text>
          <Text style={styles.text}>Phone - {data.phone}</Text>
          <Text style={styles.text}>Web site - {data.website}</Text>
        </View>
      )}

      <View style={styles.all_button}>
        <Button title="Get All User Names" onPress={getAllData}></Button>
      </View>

      <FlatList
        data={alldata}
        keyExtractor={({id}, index) => id}
        renderItem={({item}) => (
          <Text style={styles.list}>{item.id + '. ' + item.name}</Text>
        )}
      />
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
    fontSize: 20,
    fontWeight: 'bold',
  },
  button: {
    width: 100,
  },
  input: {
    borderWidth: 1,
    padding: 10,
    margin: 20,
    textAlign: 'center',
  },
  topic: {
    textAlign: 'center',
    marginTop: 10,
    fontSize: 25,
  },
  all_button: {
    width: 150,
    marginTop: 30,
    marginBottom: 20,
  },
  list: {
    fontSize: 15,
    marginTop: 5,
    color: 'black',
  },
});
