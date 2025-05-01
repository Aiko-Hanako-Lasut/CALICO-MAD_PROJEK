/* eslint-disable prettier/prettier */

/* halaman createQuizAnswer2 + notes */

import React from 'react'; // import React (buat komponen)
import {
  SafeAreaView, // pisahkan header dan body
  ScrollView, // scroll
  View, // kontainer
  TextInput, // input teks
  Text, // teks
  TouchableOpacity, // tombol bisa di klik
  Image, // gambar
  StyleSheet, // styling komponen
  Dimensions, // ambil uk layar
} from 'react-native';
import Header from '../components/header2';
import Body from '../components/body';
import Footer from '../components/footer';

/* uk body menyesuikan dgn uk layar */
const {width: SCREEN_WIDTH} = Dimensions.get('window');
const CARD_WIDTH = SCREEN_WIDTH * 0.95; // uk body = 75% dari uk layar

// buat komponen signUp
const createQuizAnswer2 = () => (
  <SafeAreaView style={styles.safe}>
    <Body>
      {/* header ttp stay saat discroll */}
      <Header />

      {/* scrollview hanya untuk body */}
      <ScrollView contentContainerStyle={styles.scroll}>
        <View style={styles.card}>
          <View style={styles.alignTitle}>
            <Text style={styles.title}>Enter answer</Text>
            <Text style={styles.subTitle}>/50</Text>
          </View>
        </View>
        <View style={styles.card2}>
          <TextInput
            style={styles.inputText}
            placeholder="Add answer..."
            placeholderTextColor="#130E01"
          />
        </View>
        <View style={styles.correctAnswerBox}>
          <Text style={styles.correctAnswerText}>Correct answer</Text>
          <TouchableOpacity>
            <Image
              style={styles.slideButton}
              source={require('../assets/slidebuttonon.png')}
            />
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.saveButton}>
          <Text style={styles.saveText}>Save Answer</Text>
        </TouchableOpacity>
      </ScrollView>
      <Footer />
    </Body>
  </SafeAreaView>
);

// styling komponen
const styles = StyleSheet.create({
  safe: {
    flex: 1,
  },
  scroll: {
    alignItems: 'center',
  },
  card: {
    width: CARD_WIDTH,
    padding: 10,
    marginTop: 40,
  },
  alignTitle: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 148,
  },
  title: {
    fontSize: 18,
    alignItems: 'center',
    color: '#FEFEFE',
    marginLeft: 68,
  },
  subTitle: {
    fontSize: 12,
    color: '#FEFEFE',
    marginLeft: 108,
  },
  card2: {
    marginTop: 4,
    backgroundColor: '#F2A602',
    width: 233,
    height: 167,
  },
  correctAnswerBox: {
    width: 233,
    height: 45,
    backgroundColor: '#FEFEFE',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    marginTop: 14,
  },
  correctAnswerText: {
    fontSize: 16,
    backgroundColor: '#FEFEFE',
  },
  slideButton: {
    width: 49,
    height: 23,
    marginLeft: 52,
  },
  inputText: {
    padding: 12,
    fontSize: 16,
  },
  saveButton: {
    backgroundColor: '#28A745',
    borderRadius: 20,
    width: 150,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 26,
  },
  saveText: {
    color: '#FEFEFE',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

// export komponen signUp
export default createQuizAnswer2;
