import React, {useState} from 'react';
import {StyleSheet, View, TouchableOpacity, Text, Image} from 'react-native';

const Footer = ({onViewProfile, onChangePassword}) => {
  const [isProfilePressed, setIsProfilePressed] = useState(false);
  const [isPasswordPressed, setIsPasswordPressed] = useState(false);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.item, isProfilePressed && styles.pressedItem]}
        onPress={() => {
          setIsProfilePressed(true);
          setIsPasswordPressed(false);
          onViewProfile();
        }}
        onBlur={() => setIsProfilePressed(false)}
        activeOpacity={1}
        accessibilityLabel="View Profile Button">
        <Image
          source={require('../../../assets')}
          style={styles.icon}
          accessibilityLabel="Profile Icon"
        />
        <Text style={[styles.text, isProfilePressed && styles.pressedText]}>
          View Profile
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.item, isPasswordPressed && styles.pressedItem]}
        onPress={() => {
          setIsPasswordPressed(true);
          setIsProfilePressed(false);
          onChangePassword();
        }}
        onBlur={() => setIsPasswordPressed(false)}
        activeOpacity={1}
        accessibilityLabel="Change Password Button">
        <Image
          source={require('../../../assets')}
          style={styles.icon}
          accessibilityLabel="Edit Icon"
        />
        <Text style={[styles.text, isPasswordPressed && styles.pressedText]}>
          Change Password
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 15,
    backgroundColor: '#F2A602',
    borderTopWidth: 1,
    borderTopColor: '#eee',
    height: 100,
    width: 402,
  },
  item: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 8,
  },
  text: {
    fontSize: 16,
    color: '#333',
  },
  pressedItem: {
    backgroundColor: 'white',
    borderRadius: 50,
  },
  pressedText: {
    color: '#F2A602',
  },
});

export default Footer;
