/* eslint-disable prettier/prettier */

/* komponen header2 + notes */

import React from 'react';
import {Image, StyleSheet, View, TouchableOpacity, Text} from 'react-native';

const Header2 = () => (
  <View style={styles.container}>
    <Image
      source={require('../assets/calico_header.png')}
      style={styles.logo}
      resizeMode="stretch"
    />
    <TouchableOpacity style={styles.saveButton}>
      <Text style={styles.buttonText}>Save</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.exitButton}>
      <Text style={styles.buttonText}>Exit</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 80,
  },
  logo: {
    width: '100%',
    height: 80,
  },
  saveButton: {
    backgroundColor: '#28A745',
    padding: 10,
    borderRadius: 20,
    position: 'absolute', // spya di atas logo
    right: 100,
    top: 20,
    width: 70,
    height: 45,
  },
  exitButton: {
    backgroundColor: '#5A655D',
    padding: 10,
    borderRadius: 20,
    position: 'absolute', // spya di atas logo
    right: 20,
    top: 20,
    width: 70,
    height: 45,
  },
  buttonText: {
    color: '#FEFEFE',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 18,
  },
});

export default Header2;
