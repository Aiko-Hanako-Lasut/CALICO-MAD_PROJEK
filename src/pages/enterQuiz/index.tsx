/* eslint-disable prettier/prettier */

import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  Image,
  StyleSheet,
  StatusBar,
  Modal,
} from 'react-native';
import { NavigationProp } from '@react-navigation/native';

interface handleStartQuizProps {
  navigation: NavigationProp<any>;
}

export default function EnterQuiz() {
  const [name, setName] = useState('');
  const [nim, setNim] = useState('');
  const [quizCode, setQuizCode] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  const handleStartQuiz: React.FC<handleStartQuizProps> = ({ navigation }) => {
    if (quizCode !== '12345') {
      // Contoh validasi kode
      setModalVisible(true);
    } else {
      // lanjut ke quiz page kalau code benar
      console.log('Code valid, mulai quiz!');
    }
  };

  return (
    <ImageBackground
      source={require('../../assets/calico_bg.png')}
      style={styles.background}
      resizeMode="cover">
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />

      {/* Header */}
      <View style={styles.header}>
        <View style={styles.logoContainer}>
          <Image
            source={require('../../assets/logo.png')}
            style={styles.logoImage}
          />
        </View>
        <TouchableOpacity style={styles.loginLecturerButton}>
          <Text style={styles.loginLecturerText}>Login as a lecturer</Text>
        </TouchableOpacity>
      </View>

      {/* Form */}
      <View style={styles.formContainer}>
        <TextInput
          placeholder="Enter your name"
          placeholderTextColor="#333"
          style={styles.input}
          value={name}
          onChangeText={setName}
        />
        <TextInput
          placeholder="Enter your NIM"
          placeholderTextColor="#333"
          style={styles.input}
          value={nim}
          onChangeText={setNim}
        />
        <TextInput
          placeholder="Enter quiz code"
          placeholderTextColor="#333"
          style={styles.input}
          value={quizCode}
          onChangeText={setQuizCode}
        />
        <TouchableOpacity style={styles.startButton} onPress={handleStartQuiz}>
          <Text style={styles.startButtonText}>Start</Text>
        </TouchableOpacity>
      </View>

      {/* Modal */}
      <Modal
        visible={modalVisible}
        transparent
        animationType="fade"
        onRequestClose={() => setModalVisible(false)}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>Your code is invalid.</Text>
            <TouchableOpacity
              style={styles.tryAgainButton}
              onPress={() => setModalVisible(false)}>
              <Text style={styles.tryAgainButtonText}>Try again</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  header: {
    marginTop: 50,
    paddingHorizontal: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logoWrapper: {
    flexDirection: 'row',
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    backgroundColor: '#F5A623',
    paddingHorizontal: 60,
    paddingVertical: 5,
    borderRadius: 5,
  },
  logoImage: {
    width: 30,
    height: 30,
    marginLeft: 8,
  },
  loginLecturerButton: {
    flexDirection: 'row',
    backgroundColor: '#ffffffcc',
    paddingHorizontal: 12,
    paddingVertical: 7,
    borderRadius: 6,
    alignItems: 'center',
  },
  loginLecturerText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#333',
  },
  formContainer: {
    marginTop: 80,
    paddingHorizontal: 30,
  },
  input: {
    backgroundColor: '#ffffffcc',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 14,
    paddingVertical: 12,
    fontSize: 14,
    color: '#333',
    marginBottom: 20,
  },
  startButton: {
    backgroundColor: 'green',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 25,
    alignSelf: 'center',
    alignItems: 'center',
  },
  startButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: 'red',
    padding: 30,
    borderRadius: 10,
    alignItems: 'center',
  },
  modalText: {
    color: '#fff',
    fontSize: 16,
    marginBottom: 20,
  },
  tryAgainButton: {
    backgroundColor: '#333',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  tryAgainButtonText: {
    color: '#fff',
    fontWeight: '600',
  },
});
