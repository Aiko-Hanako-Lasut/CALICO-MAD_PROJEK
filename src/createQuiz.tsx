/* eslint-disable prettier/prettier */

/* halaman createQuiz + notes */

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
import Option from '../components/option';
import Footer from '../components/footer';

/* uk body menyesuikan dgn uk layar */
const {width: SCREEN_WIDTH} = Dimensions.get('window');
const CARD_WIDTH = SCREEN_WIDTH * 0.95; // uk body = 75% dari uk layar

// buat komponen signUp
const createQuiz = () => (
  <SafeAreaView style={styles.safe}>
    <Body>
      {/* header ttp stay saat discroll */}
      <Header />

      {/* scrollview hanya untuk body */}
      <ScrollView contentContainerStyle={styles.scroll}>
        <View style={styles.card}>
          <View style={styles.titleContainer}>
            <TextInput
              placeholder="Enter your title..."
              placeholderTextColor="#130E01"
              style={styles.textInputTitle}
            />
            <TouchableOpacity style={styles.menu}>
              <Image
                source={require('../assets/menu.png')}
                style={styles.menuIcon}
              />
            </TouchableOpacity>
          </View>
          <TextInput
            placeholder="Type in your question..."
            placeholderTextColor="#130E01"
            style={styles.textInputQuestion}
          />
          <TouchableOpacity style={styles.addImage}>
            <Image
              source={require('../assets/photo.png')}
              style={styles.addImageIcon}
            />
            <Text style={styles.addImageText}>Upload file</Text>
          </TouchableOpacity>

          <View style={styles.optionContainer}>
            <View style={styles.optionWrapper}>
              <Option prefix="A" />
            </View>
            <View style={styles.optionWrapper}>
              <Option prefix="B" />
            </View>
          </View>
          <View style={styles.optionContainer2}>
            <View style={styles.optionWrapper}>
              <Option prefix="C" />
            </View>
            <View style={styles.optionWrapper}>
              <Option prefix="D" />
            </View>
          </View>
        </View>
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
  textInputTitle: {
    width: CARD_WIDTH - 140,
    height: 45,
    backgroundColor: '#FEFEFE',
    paddingLeft: 10,
    fontSize: 16,
    color: '#130E01',
    borderColor: '#130E01',
    borderWidth: 1,
  },
  textInputQuestion: {
    width: CARD_WIDTH - 20,
    height: 45,
    backgroundColor: '#FEFEFE',
    paddingLeft: 10,
    marginBottom: 20,
    fontSize: 16,
    color: '#130E01',
    borderColor: '#130E01',
    borderWidth: 1,
  },
  addImage: {
    width: CARD_WIDTH - 160,
    backgroundColor: '#D9D9D9',
    flexDirection: 'column',
    alignItems: 'center',
    padding: 20,
    alignSelf: 'center',
    marginTop: 16,
    marginBottom: 16,
  },
  addImageIcon: {
    width: 76,
    height: 71,
    marginBottom: 16,
  },
  addImageText: {
    fontSize: 16,
    color: '#130E01',
    textDecorationLine: 'underline', // spya ada garis bawah
  },
  card: {
    width: CARD_WIDTH,
    padding: 10,
    marginTop: 20,
    gap: 10,
  },
  optionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  optionContainer2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  optionWrapper: {
    width: CARD_WIDTH / 2, // 2 kolom
    marginBottom: 10,
  },
  menuIcon: {
    width: 44,
    height: 45,
    marginLeft: 64,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: CARD_WIDTH,
    marginBottom: 20,
  },
  menu: {
    marginLeft: 10,
  },
});

// export komponen signUp
export default createQuiz;
