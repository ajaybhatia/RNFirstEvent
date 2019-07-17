import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

const Home = () => {
  const [fontSize, setFontSize] = useState(32);
  const [backgroundColor, setBackgroundColor] = useState('');
  const [color, setColor] = useState('black');

  const increment = () => {
    setFontSize(fontSize + 4);
  };

  const decrement = () => {
    setFontSize(fontSize - 4);
  };

  const setBackground = color => {
    setBackgroundColor(color);
    setColor('white');
  };

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <Text style={[styles.text, { fontSize, color }]}>Hello, World</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={decrement}>
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={increment}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
      <View style={{ marginTop: 10 }}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => setBackground('red')}
        >
          <Text style={styles.buttonText}>Set Background Red</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => setBackground('blue')}
        >
          <Text style={styles.buttonText}>Set Background Blue</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => setBackground('green')}
        >
          <Text style={styles.buttonText}>Set Background Green</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 32,
  },
  buttonContainer: {
    marginTop: 20,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },
  button: {
    backgroundColor: 'teal',
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderRadius: 20,
    margin: 10,
  },
  buttonText: {
    fontSize: 20,
    color: 'white'
  },
});

export default Home;
