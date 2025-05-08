/* eslint-disable prettier/prettier */

import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Image,
} from 'react-native';
import {NavigationProp} from '@react-navigation/native';
import { burger, home, logo, reportNotes } from '../../assets';

interface MenuDrawerProps {
  navigation: NavigationProp<any>;
}

interface MenuItem {
  iconSource: any;
  label: string;
  onPress: () => void;
}

interface MenuDrawerProps {
  navigation: NavigationProp<any>;
}

const MenuDrawer: React.FC<MenuDrawerProps> = ({navigation}) => {
  const menuItems: MenuItem[] = [
    {
      iconSource: home,
      label: 'Home',
      onPress: () => {
        navigation.navigate('home');
      },
    },
    {
      iconSource: home,
      label: 'Create Quiz',
      onPress: () => {
        navigation.navigate('createQuiz');
      },
    },
    {
      iconSource: reportNotes,
      label: 'Report',
      onPress: () => {
        navigation.navigate('report');
      },
    },
    {
      iconSource: home,
      label: 'About Us',
      onPress: () => {
        navigation.navigate('aboutUs');
      },
    },
  ];

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Image
            source={logo}
            style={styles.logo}
            resizeMode="contain"
          />
          <Text style={styles.subtitle}>MAKE YOUR STUDY FUN</Text>
        </View>

        <View style={styles.menuItemsContainer}>
          {menuItems.map((item, idx) => (
            <TouchableOpacity
              key={idx}
              style={styles.item}
              onPress={item.onPress}>
              <View style={styles.itemIndicator} />
              <Image
                source={burger} // tes
                style={styles.icon}
                resizeMode="contain"
              />
              <Text style={styles.label}>{item.label}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.bottomOrnament} />
      </View>
    </SafeAreaView>
  );
};

export default MenuDrawer;

const styles = StyleSheet.create({
  safeArea: {flex: 1},
  container: {
    flex: 1,
    backgroundColor: '#FFDA63',
    paddingTop: 20,
    paddingHorizontal: 15,
  },
  header: {
    paddingVertical: 20,
    alignItems: 'flex-start',
    marginBottom: 20,
  },
  logo: {width: 120, height: 40},
  subtitle: {fontSize: 12, color: '#000', marginTop: 2},
  menuItemsContainer: {flex: 1},
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    marginBottom: 5,
  },
  itemIndicator: {
    width: 5,
    height: '100%',
    backgroundColor: '#008080',
    marginRight: 15,
  },
  icon: {width: 24, height: 24, marginRight: 15},
  label: {fontSize: 16, color: '#000'},
  bottomOrnament: {
    height: 60,
    backgroundColor: 'rgba(255, 218, 99, 0.5)',
  },
});
