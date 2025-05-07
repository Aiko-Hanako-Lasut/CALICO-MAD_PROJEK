import React, {useState} from 'react';
import {View, Image, StyleSheet, TouchableOpacity, Text} from 'react-native';
import MenuDrawer from '../Menu';

interface HeaderProps {
  navigation: any; // Asumsi Anda menggunakan React Navigation
}

const Header: React.FC<HeaderProps> = ({navigation}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <View style={styles.container}>
      {/* Kiri: Burger + Logo */}
      <View style={styles.leftGroup}>
        <TouchableOpacity onPress={toggleMenu}>
          <Image
            source={require('../../../assets/burger.png')}
            style={styles.burger}
          />
        </TouchableOpacity>
        <Image
          source={require('../../../assets/LogoCalico.png')}
          style={styles.logo}
        />
      </View>

      {/* Kanan: Icon Home + Profile */}
      <View style={styles.sideRight}>
        <TouchableOpacity
          style={styles.iconButton}
          onPress={() => navigation.navigate('Home')}>
          <Image
            source={require('../../../assets/Home.png')}
            style={styles.icon}
          />
          <Text style={styles.iconText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.iconButton}
          onPress={() => navigation.navigate('Profile')}>
          <Image
            source={require('../../../assets/profil.png')}
            style={styles.icon}
          />
          <Text style={styles.iconText}>Profile</Text>
        </TouchableOpacity>
      </View>

      {/* Menu Drawer (Pop-up) */}
      <MenuDrawer
        isOpen={isMenuOpen}
        onClose={toggleMenu}
        navigation={navigation}
      />
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
    zIndex: 10, // Pastikan header di atas konten utama
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
