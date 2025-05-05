/* eslint-disable prettier/prettier */
import React from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  StyleSheet,
  StatusBar,
} from 'react-native';

const ReviewScreen = () => {
  return (
    <ImageBackground
      source={require('./assets/background.png')}
      style={styles.background}
      resizeMode="cover">
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />

      {/* Header */}
      <View style={styles.orangeHeader}>
        <Image source={require('./assets/logo.png')} style={styles.logoImage} />
        <Text style={styles.reviewText}>Review details</Text>
      </View>

      {/* Title */}
      <Text style={styles.title}>Finding Nemo (2003)</Text>

      {/* Question 1 */}
      <View style={styles.questionContainer}>
        <Text style={styles.questionNumber}>1. Who is the lost fish?</Text>
        <View style={styles.answerBox}>
          <Text style={styles.answerText}>B</Text>
          <Text style={styles.answerValue}>Nemo</Text>
          <Text style={styles.checkMark}>✓</Text>
        </View>
      </View>

      {/* Question 2 */}
      <View style={styles.questionContainer}>
        <Text style={styles.questionNumber}>2. Her name is Dora.</Text>
        <View style={styles.answerBox}>
          <Text style={styles.answerText}>B</Text>
          <Text style={styles.answerValue}>False</Text>
          <Text style={styles.checkMark}>✓</Text>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    padding: 20,
  },
  orangeHeader: {
    backgroundColor: '#f8b400',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 20,
    marginTop: 35,
    marginBottom: 15,
  },
  logoImage: {
    width: 100,
    height: 35,
    resizeMode: 'contain',
    marginRight: 10,
  },
  reviewText: {
    fontSize: 16,
    fontWeight: '600',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginVertical: 25,
  },
  questionContainer: {
    backgroundColor: '#f8b400',
    padding: 15,
    borderRadius: 8,
    marginVertical: 10,
  },
  questionNumber: {
    fontSize: 16,
    marginBottom: 10,
    color: '#000',
    fontWeight: '600',
  },
  answerBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 6,
  },
  answerText: {
    fontSize: 16,
    fontWeight: '700',
    marginRight: 10,
  },
  answerValue: {
    fontSize: 16,
    flex: 1,
  },
  checkMark: {
    fontSize: 20,
    color: 'green',
    fontWeight: 'bold',
  },
});

export default ReviewScreen;
