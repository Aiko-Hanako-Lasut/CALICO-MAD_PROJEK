import React, {useState} from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Image} from 'react-native';
import InputText from '../../components/molecules/textInput/textInput2';
import Button from '../../components/atoms/button/button2';
import Footer from '../../components/molecules/footer/footer2';
import Header from '../../components/molecules/header/header2';
import Body from '../../components/molecules/body/body2';
import {NavigationProp} from '@react-navigation/native';
import { editIcon, eyeClose, eyeOpen, profileIcon } from '../../assets';

interface ChangePasswordScreenProps {
  navigation: NavigationProp<any>;
}

const ChangePasswordScreen: React.FC<ChangePasswordScreenProps> = ({
  navigation,
}) => {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [newPasswordConfirmation, setNewPasswordConfirmation] = useState('');
  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showNewPasswordConfirmation, setShowNewPasswordConfirmation] =
    useState(false);

  const handleSavePassword = () => {
    console.log('Save Password Pressed');
    console.log('Old Password:', oldPassword);
    console.log('New Password:', newPassword);
    console.log('New Password Confirmation:', newPasswordConfirmation);
  };

  const handleViewProfilePress = () => {
    navigation.navigate('myProfile');
  };

  const handleChangePasswordPress = () => {
    navigation.navigate('changePassword');
  };

  return (
    <Body>
      <Header/>
      <View style={styles.container}>
        <Text style={styles.title}>CHANGE MY PASSWORD</Text>

        <InputText
          label="Old Password"
          placeholder="Enter your old password"
          value={oldPassword}
          onChangeText={setOldPassword}
          secureTextEntry={!showOldPassword}>
          <TouchableOpacity
            onPress={() => setShowOldPassword(!showOldPassword)}>
            <Image
              source={
                showOldPassword
                  ? eyeOpen
                  : eyeClose
              }
              style={styles.eyeIcon}
            />
          </TouchableOpacity>
        </InputText>

        <InputText
          label="New Password"
          placeholder="Enter your new password"
          value={newPassword}
          onChangeText={setNewPassword}
          secureTextEntry={!showNewPassword}>
          <TouchableOpacity
            onPress={() => setShowNewPassword(!showNewPassword)}>
            <Image
              source={
                showNewPassword
                ? eyeOpen
                : eyeClose
            }
              style={styles.eyeIcon}
            />
          </TouchableOpacity>
        </InputText>

        <InputText
          label="New Password Confirmation"
          placeholder="Confirm your new password"
          value={newPasswordConfirmation}
          onChangeText={setNewPasswordConfirmation}
          secureTextEntry={!showNewPasswordConfirmation}>
          <TouchableOpacity
            onPress={() =>
              setShowNewPasswordConfirmation(!showNewPasswordConfirmation)
            }>
            <Image
              source={
                showNewPasswordConfirmation
                ? eyeOpen
                : eyeClose
            }
              style={styles.eyeIcon}
            />
          </TouchableOpacity>
        </InputText>

        <View style={styles.saveButton}>
          <Button
            title="SAVE"
            onPress={handleSavePassword}
            backgroundColor="#26A69A"
            textColor="white"
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
            iconSource: editIcon, // tes
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
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 30,
    textAlign: 'center',
  },
  eyeIcon: {
    width: 24,
    height: 24,
    tintColor: '#888',
  },
  saveButton: {
    marginTop: 30,
  },
});

export default ChangePasswordScreen;
