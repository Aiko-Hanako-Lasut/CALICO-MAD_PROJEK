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
import { calicoBg, dory, logo } from '../../assets';

import { useState } from 'react';

const QuizQuestionScreen2: React.FC<{ navigation: NavigationProp<any> }> = ({ navigation }) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  return (
    <ImageBackground
      source={calicoBg}
      style={styles.background}
      resizeMode="cover">
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />

      {/* Header */}
      <View style={styles.header}>
        <Image
          source={logo}
          style={styles.logo}
        />
        <View style={styles.timerContainer}>
          <Text style={styles.timerText}>Time remaining</Text>
          <View style={styles.timerBox}>
            <Text style={styles.timerIcon}>⏱</Text>
            <Text style={styles.timerValue}>02 : 00</Text>
          </View>
        </View>
      </View>

      {/* Title & Info */}
      <View style={styles.infoBox}>
        <Text style={styles.titleBox}>Finding Nemo (2003)</Text>
        <Text style={styles.questionNumber}>Total questions 2/2</Text>
      </View>

      {/* Question */}
      <View style={styles.questionBox}>
        <Text style={styles.questionText}>Her name is Dora.</Text>
      </View>

      {/* Image */}
      <Image
        source={dory}
        style={styles.questionImage}
        resizeMode="contain"
      />

      {/* Answer Options */}
      <View style={styles.optionsContainer}>
        <TouchableOpacity
          style={[
            styles.optionButton,
            selectedOption === 'A' && styles.optionButtonPressed,
          ]}
          onPress={() => setSelectedOption('A')}>
          <Text style={styles.optionLabel}>A</Text>
          <Text style={styles.optionText}>True</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.optionButton,
            selectedOption === 'B' && styles.optionButtonPressed,
          ]}
          onPress={() => setSelectedOption('B')}>
          <Text style={styles.optionLabel}>B</Text>
          <Text style={styles.optionText}>False</Text>
        </TouchableOpacity>

      </View>

      {/* Bottom Buttons */}
      <View style={styles.bottomContainer}>
        <TouchableOpacity 
          style={styles.bottomButton} 
          onPress={() => navigation.goBack()}>
          <Text style={styles.bottomButtonText}>Previous</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.bottomButton}
          onPress={() => navigation.navigate('review')}>
          <Text style={styles.bottomButtonText}>Finish</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 12,
    backgroundColor: '#F5A623',
  },
  logo: {
    width: 120,
    height: 40,
    resizeMode: 'contain',
  },
  timerContainer: {
    alignItems: 'flex-end',
  },
  timerText: {
    fontSize: 12,
    color: '#000',
    fontWeight: '600',
  },
  timerBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 5,
    marginTop: 4,
  },
  timerIcon: {
    fontSize: 14,
    marginRight: 6,
  },
  timerValue: {
    color: '#F5A623',
    fontWeight: 'bold',
  },
  infoBox: {
    marginTop: 20,
    alignItems: 'center',
  },
  titleBox: {
    fontSize: 18,
    fontWeight: 'bold',
    backgroundColor: '#fff',
    padding: 10,
    borderWidth: 1,
    marginBottom: 6,
  },
  questionNumber: {
    fontSize: 12,
    fontWeight: '600',
    color: '#000',
  },
  questionBox: {
    backgroundColor: '#fff',
    padding: 10,
    margin: 15,
    borderWidth: 1,
    alignSelf: 'center',
  },
  questionText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#000',
  },
  questionImage: {
    width: 200,
    height: 150,
    alignSelf: 'center',
    marginVertical: 20,
  },
  optionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginHorizontal: 20,
    marginTop: 10,
  },
  optionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 6,
  },
  optionLabel: {
    backgroundColor: '#F5A623',
    color: '#fff',
    fontWeight: 'bold',
    width: 25,
    height: 25,
    textAlign: 'center',
    borderRadius: 4,
    marginRight: 10,
  },
  optionButtonPressed: {
    backgroundColor: '#D3D3D3',
  },
  optionText: {
    fontSize: 16,
  },
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#F5A623',
    paddingVertical: 16,
    marginTop: 190,
  },
  bottomButton: {
    backgroundColor: 'green',
    paddingVertical: 12,
    paddingHorizontal: 35,
    borderRadius: 20,
  },
  bottomButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default QuizQuestionScreen2;
