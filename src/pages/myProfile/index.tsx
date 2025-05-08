import React, {useState} from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Image} from 'react-native';
import InputText from '../../components/molecules/textInput/textInput2';
import Button from '../../components/atoms/button/button2';
import Footer from '../../components/molecules/footer/footer2';
import Header from '../../components/molecules/header/header2';
import Body from '../../components/molecules/body/body2';
import { NavigationContainer, NavigationProp } from '@react-navigation/native';
import { chat, editIcon, logOut, profileIcon } from '../../assets';

interface ProfileScreenProps {
  navigation: NavigationProp<any>;
}

const ProfileScreen: React.FC<ProfileScreenProps> = ({ navigation }) => {
  const [namaPengguna, setNamaPengguna] = useState('Nama Awal');
  const [emailPengguna, setEmailPengguna] = useState('email@example.com');
  const [fakultasPengguna, setFakultasPengguna] = useState(
    'Fakultas Ilmu Komputer',
  );

  const handleLogout = () => {
    console.log('Logout pressed');
  };

  const handleContactAdmin = () => {
    console.log('Contact admin pressed');
  };

  const handleViewProfilePress = () => {
    console.log('View Profile pressed (from footer)');
  };

  const handleChangePasswordPress = () => {
    navigation.navigate('changePassword');
  };

  return (
    <Body>
      <Header />
      <View style={styles.container}>
        <Text style={styles.title}>MY PROFILE</Text>
        <InputText
          label="NAMA"
          value={namaPengguna}
          onChangeText={setNamaPengguna}
        />
        <InputText
          label="EMAIL"
          value={emailPengguna}
          onChangeText={setEmailPengguna}
          keyboardType="email-address"
        />
        <InputText
          label="FAKULTAS"
          value={fakultasPengguna}
          editable={false}
        />

        <View style={styles.logoutButton}>
          <Button
            title="LOG OUT"
            backgroundColor="#DB4437"
            textColor="white"
            onPress={() => navigation.navigate('logIn')}
            iconSource={logOut}
            iconStyle={styles.logoutIcon}
          />
        </View>
      </View>
      <Footer
        items={[
          { 
            label: 'Profile', 
            onPress: handleViewProfilePress, 
            iconSource: profileIcon, 
            accessibilityLabel: 'View Profile', 
            onChangePassword: handleChangePasswordPress, 
            onViewProfile: handleViewProfilePress 
          },
          { 
            label: 'Change Password', 
            onPress: handleChangePasswordPress, 
            iconSource: editIcon, 
            accessibilityLabel: 'Change Password', 
            onChangePassword: handleChangePasswordPress, 
            onViewProfile: handleViewProfilePress 
          },
        ]}
      />
    </Body>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
    textAlign: 'center',
  },
  contactAdminButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  contactAdminIcon: {
    width: 24,
    height: 24,
    marginRight: 8,
  },
  contactAdminText: {
    color: '#00acc1',
    fontSize: 16,
  },
  logoutIcon: {
    width: 33,
    height: 33,
    alignItems: 'center',
  },
  logoutButton: {
    width: 620,
    height: 70,
    borderRadius: 5,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

export default ProfileScreen;
