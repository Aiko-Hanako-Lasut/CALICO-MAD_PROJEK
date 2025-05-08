/* eslint-disable prettier/prettier */

import React from 'react';
import {ImageBackground, StyleSheet} from 'react-native';
import { calicoBg } from '../../../assets';

const Body: React.FC<{children: React.ReactNode}> = ({children}) => (
  <ImageBackground
    source={calicoBg}
    style={styles.background}
    resizeMode="cover">
    {children}
  </ImageBackground>
);
const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
});
export default Body;
