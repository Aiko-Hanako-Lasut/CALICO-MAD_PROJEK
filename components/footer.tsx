/* eslint-disable prettier/prettier */

/* komponen footer */

import React from 'react';
import {Image, StyleSheet, View, TouchableOpacity, Text} from 'react-native';

const Footer = () => (
  <View style={styles.container}>
    <TouchableOpacity style={styles.questionButton}>
      <Text style={styles.buttonText}>Question 1</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.addButton}>
      <Image source={require('../assets/add.png')} style={styles.addIcon} />
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 80,
    backgroundColor: '#F2A602',
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    width: '100%',
    height: 80,
  },
  questionButton: {
    backgroundColor: '#D9D9D9',
    paddingHorizontal: 20,
    borderRadius: 20,
    justifyContent: 'center',
    height: 45,
    marginLeft: 20,
  },
  addButton: {
    left: 236,
    justifyContent: 'center',
  },
  buttonText: {
    color: '#130E01',
    textAlign: 'center',
    fontSize: 12,
  },
  addIcon: {
    width: 45,
    height: 45,
  },
});

export default Footer;
