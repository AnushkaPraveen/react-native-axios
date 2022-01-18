import React, {useState} from 'react';
import {StyleSheet, Text, View, Pressable, Button} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {increment, decrement, reset} from './reducer';

const CountingApp = () => {

  const dispatch = useDispatch();

  const counter = useSelector(state => state.counter);

  /* const [count,SetCount]=useState(0);

const increase=()=>{
  SetCount(count + 1)
}
const decrease=()=>{
  SetCount(count - 1)
} */

  return (
    <View style={styles.body}>
      <Text style={styles.title}>Counting App</Text>
      <View>
        <Pressable style={styles.press} onPress={() => dispatch(increment())}>
          <Text style={styles.press_text}>+</Text>
        </Pressable>
        <View>
          <Text style={styles.count_text}>{counter}</Text>
        </View>

        <Pressable style={styles.press} onPress={() => dispatch(decrement())}>
          <Text style={styles.press_text}>-</Text>
        </Pressable>
        <Button title="reset" onPress={() => dispatch(reset())} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#23b574',
    alignItems: 'center',
    justifyContent: 'center',
  },
  press: {
    backgroundColor: '#0d6efd',
    margin: 10,
    padding: 10,
    borderRadius: 5,
    width: 100,
  },
  press_text: {
    fontSize: 25,
    textAlign: 'center',
    color: 'white',
  },
  count_text: {
    textAlign: 'center',
    fontSize: 50,
    color: 'white',
  },
  title: {
    fontSize: 40,
    fontWeight:'700',
    color:'white'
  },
});

export default CountingApp;
