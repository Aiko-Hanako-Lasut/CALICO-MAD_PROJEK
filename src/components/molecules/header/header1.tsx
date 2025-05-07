import React from 'react';
import {View, Image, StyleSheet, TouchableOpacity, Text} from 'react-native';

const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.leftGroup}>
        <TouchableOpacity>
          <Image source={require('../../../assets')} style={styles.burger} />
        </TouchableOpacity>
        <Image source={require('../../../assets')} style={styles.logo} />
      </View>

      <View style={styles.sideRight}>
        <TouchableOpacity style={styles.iconButton}>
          <Image source={require('../../../assets')} style={styles.icon} />
          <Text style={styles.iconText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
          <Image source={require('../../../assets')} style={styles.icon} />
          <Text style={styles.iconText}>Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
  sideRight: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  logo: {
    width: 154,
    height: 50,
    resizeMode: 'contain',
    marginLeft: 5,
  },
  burger: {
    width: 32,
    height: 32,
    resizeMode: 'contain',
  },
  iconButton: {
    alignItems: 'center',
    marginHorizontal: 8,
  },
  icon: {
    width: 32,
    height: 32,
    resizeMode: 'contain',
  },
  iconText: {
    fontSize: 12,
    color: '#000',
    fontWeight: '600',
    marginTop: 2,
  },
});

export default Header;
