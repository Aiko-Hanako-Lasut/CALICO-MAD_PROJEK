/* eslint-disable prettier/prettier */

/* komponen header */

import React from 'react';
import {Image, StyleSheet, View} from 'react-native';

const Header = () => (
  <View style={styles.container}>
    <Image
      source={require('../assets/calico_header.png')}
      style={styles.logo}
      resizeMode="stretch"
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  logo: {
    width: '100%',
    height: 80,
  },
});

export default Header;
