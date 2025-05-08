/* eslint-disable prettier/prettier */

import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  Image,
  StyleSheet,
  StatusBar,
} from 'react-native';
import { NavigationProp } from '@react-navigation/native';
import { calicoBg, logo } from '../../assets';

interface QuizDetailsScreenProps {
  navigation: NavigationProp<any>;
}

const QuizDetailsScreen: React.FC<QuizDetailsScreenProps> = ({ navigation }) => {
  return (
    <ImageBackground
      source={calicoBg}
      style={styles.background}
      resizeMode="cover">
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />

      <View style={styles.header}>
        <View style={styles.logoWrapper}>
          <Image
            source={logo}
            style={styles.logoImage}
          />
        </View>
        <TouchableOpacity style={styles.loginLecturerButton}>
          <Text style={styles.loginLecturerText}>Login as a lecturer</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.quizTitle}>Finding Nemo (2003)</Text>

      <View style={styles.detailsContainer}>
        <Text style={styles.detailsText}>English Class</Text>
        <Text style={styles.detailsText}>Ms. Aiko Lasut</Text>
        <Text style={styles.detailsText}>Total questions x2</Text>
        <Text style={styles.detailsText}>Duration 5 minutes</Text>
      </View>

      <TouchableOpacity style={styles.startButton}>
        <Text style={styles.startButtonText}>Start</Text>
      </TouchableOpacity>
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
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  logoWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  logoImage: {
    width: '100%',
    height: '100%',
    marginRight: '100%',
  },
  loginLecturerButton: {
    backgroundColor: '#F5A623',
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 6,
    marginTop: 20,
    marginBottom: 20,
  },
  loginLecturerText: {
    fontSize: 25,
    fontWeight: '600',
    color: '#fff',
  },
  quizTitle: {
    marginTop: 80,
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
  },
  detailsContainer: {
    backgroundColor: '#F5A623',
    padding: 22,
    marginTop: 30,
    marginHorizontal: 40,
    borderRadius: 12,
    alignItems: 'center',
  },
  detailsText: {
    color: '#fff',
    fontSize: 16,
    marginBottom: 8,
  },
  startButton: {
    backgroundColor: 'green',
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 30,
    alignSelf: 'center',
    marginTop: 35,
  },
  startButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
