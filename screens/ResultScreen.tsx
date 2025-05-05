/* eslint-disable prettier/prettier */
import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
  StatusBar,
} from 'react-native';

const ResultScreen = () => {
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
      <View style={styles.header}>
        {/* <Image source={require('./assets/logo.png')} style={styles.logo} /> */}
      </View>

      {/* Title */}
      <Text style={styles.title}>Finding Nemo (2003)</Text>

      {/* Result Info */}
      <View style={styles.infoContainer}>
        <View style={styles.infoBox}>
          <Text style={styles.infoLabel}>Name</Text>
          <Text style={styles.infoValue}>: Aulia Ollo</Text>
        </View>

        <View style={styles.infoBox}>
          <Text style={styles.infoLabel}>NIM</Text>
          <Text style={styles.infoValue}>: 105012310025</Text>
        </View>

        <View style={styles.infoBox}>
          <Text style={styles.infoLabel}>Final score</Text>
          <Text style={styles.infoValue}>: 2/2</Text>
        </View>

        <View style={styles.infoBox}>
          <Text style={styles.infoLabel}>Time taken</Text>
          <Text style={styles.infoValue}>: 4 minutes</Text>
        </View>
      </View>

      {/* Buttons */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.buttonGreen}>
          <Text style={styles.buttonText}>Back to home</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonGreen}>
          <Text style={styles.buttonText}>View details</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    padding: 20,
  },
  header: {
    alignItems: 'center',
    marginTop: 30,
  },
  logo: {
    width: 120,
    height: 50,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginVertical: 25,
  },
  infoContainer: {
    marginVertical: 20,
  },
  infoBox: {
    backgroundColor: '#f8b400',
    padding: 15,
    marginVertical: 5,
    borderRadius: 8,
    flexDirection: 'row',
  },
  infoLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
  },
  infoValue: {
    fontSize: 16,
    marginLeft: 10,
    color: '#000',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 50,
  },
  buttonGreen: {
    backgroundColor: '#4CAF50',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 25,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default ResultScreen;
