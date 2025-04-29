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
          setIsPasswordPressed(false); // Ensure the other button's state is reset
          onViewProfile();
        }}
        onBlur={() => setIsProfilePressed(false)}
        activeOpacity={1} // Mencegah opacity berubah saat ditekan
        accessibilityLabel="View Profile Button">
        <Image
          source={require('@assets/viewprofile.png')}
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
          setIsProfilePressed(false); // Ensure the other button's state is reset
          onChangePassword();
        }}
        onBlur={() => setIsPasswordPressed(false)}
        activeOpacity={1} // Mencegah opacity berubah saat ditekan
        accessibilityLabel="Change Password Button">
        <Image
          source={require('@assets/editicon.png')}
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
    flexDirection: 'row', // Mengatur ikon dan teks menjadi satu baris
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center', // Agar ikon dan teks berada di tengah
    paddingHorizontal: 10, // Menambahkan padding horizontal
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 8, // Memberikan jarak antara ikon dan teks
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
    color: '#F2A602', // Mengubah warna teks saat ditekan (opsional)
  },
});

export default Footer;
