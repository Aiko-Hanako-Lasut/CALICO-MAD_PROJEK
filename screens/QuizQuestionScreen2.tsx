/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';

const QuizScreen = () => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.logoBox}>
          <Text style={styles.logoText}>CALICO</Text>
        </View>

        <View style={styles.timerContainer}>
          <Text style={styles.timerLabel}>Time remaining</Text>
          <View style={styles.timerBox}>
            <Text style={styles.timerValue}>05 : 00</Text>
          </View>
        </View>
      </View>

      {/* Title */}
      <Text style={styles.title}>Finding Nemo (2003)</Text>

      {/* Question Number */}
      <Text style={styles.questionNumber}>Total questions 1/2</Text>

      {/* Question */}
      <Text style={styles.question}>Who is the lost fish?</Text>

      {/* Image */}
      <Image source={require('./assets/Nemo.jpg')} style={styles.image} />

      {/* Options */}
      <View style={styles.optionContainer}>
        <TouchableOpacity style={styles.optionButton}>
          <Text style={styles.optionLabel}>A</Text>
          <Text style={styles.optionText}>Nomo</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.optionButton}>
          <Text style={styles.optionLabel}>B</Text>
          <Text style={styles.optionText}>Nemo</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.optionButton}>
          <Text style={styles.optionLabel}>C</Text>
          <Text style={styles.optionText}>Name</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.optionButton}>
          <Text style={styles.optionLabel}>D</Text>
          <Text style={styles.optionText}>Nirno</Text>
        </TouchableOpacity>
      </View>

      {/* Next Button */}
      <TouchableOpacity style={styles.nextButton}>
        <Text style={styles.nextButtonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

export default QuizScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },

  // Header Style
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 8,
    backgroundColor: '#F5A623',
    borderRadius: 5,
    marginBottom: 16,
  },

  logoBox: {
    backgroundColor: '#F5A623',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 5,
  },

  logoText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },

  timerContainer: {
    alignItems: 'flex-end',
  },

  timerLabel: {
    fontSize: 12,
    color: '#fff',
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

  timerValue: {
    color: '#F5A623',
    fontWeight: 'bold',
  },

  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 6,
    textAlign: 'center',
  },

  questionNumber: {
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 10,
  },

  question: {
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'center',
    marginBottom: 12,
  },

  image: {
    width: 150,
    height: 150,
    alignSelf: 'center',
    marginBottom: 20,
    borderRadius: 10,
  },

  optionContainer: {
    marginBottom: 20,
  },

  optionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 12,
    borderRadius: 8,
    marginBottom: 10,
  },

  optionLabel: {
    backgroundColor: '#F5A623',
    color: '#fff',
    fontWeight: 'bold',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
    marginRight: 10,
  },

  optionText: {
    fontSize: 16,
  },

  nextButton: {
    backgroundColor: 'green',
    padding: 14,
    borderRadius: 8,
    alignItems: 'center',
  },

  nextButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
