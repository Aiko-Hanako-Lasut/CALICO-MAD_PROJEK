/* eslint-disable prettier/prettier */

import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import {
  DrawerActions,
  useNavigation,
  NavigationProp,
  ParamListBase,
} from '@react-navigation/native';
import { burger, home, logo, profile } from '../../../assets';

export default function CustomHeader() {
  const navigation = useNavigation<NavigationProp<ParamListBase>>();

  const toggleDrawer = () => {
    navigation.dispatch(DrawerActions.toggleDrawer());
  };

  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <View style={styles.leftGroup}>
          <TouchableOpacity onPress={() => navigation.navigate('menuDrawer')}>
            <Image
              source={burger}
              style={styles.burger}
            />
          </TouchableOpacity>
          <Image
            source={logo}
            style={styles.logo}
            resizeMode="contain"
          />
        </View>

        <View style={styles.sideRight}>
          <TouchableOpacity
            style={styles.iconButton}
            onPress={() => navigation.navigate('home')}>
            <Image
              source={home}
              style={styles.icon}
            />
            <Text style={styles.iconText}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.iconButton}
            onPress={() => navigation.navigate('myProfile')}>
            <Image
              source={profile}
              style={styles.icon}
            />
            <Text style={styles.iconText}>Profile</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    zIndex: 10,
  },
  container: {
    backgroundColor: '#FFA500',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 82,
    paddingHorizontal: 8,
  },
  leftGroup: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  burger: {
    width: 32,
    height: 32,
  },
  logo: {
    width: 154,
    height: 50,
    marginLeft: 5,
  },
  sideRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconButton: {
    alignItems: 'center',
    marginHorizontal: 8,
  },
  icon: {
    width: 32,
    height: 32,
  },
  iconText: {
    fontSize: 12,
    color: '#000',
    fontWeight: '600',
    marginTop: 2,
  },
});
