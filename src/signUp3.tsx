/* eslint-disable prettier/prettier */

/* halaman signUp3 + notes */

import React from 'react'; // import React (buat komponen)
import {
  SafeAreaView, // pisahkan header dan body
  ScrollView, // scroll
  View, // kontainer
  Text, // teks
  TouchableOpacity, // tombol bisa di klik
  Image, // gambar
  StyleSheet, // styling komponen
  Dimensions, // ambil uk layar
} from 'react-native';
import Body from '../components/body';
import Header from '../components/header';

/* uk body menyesuikan dgn uk layar */
const {width: SCREEN_WIDTH} = Dimensions.get('window');
const CARD_WIDTH = SCREEN_WIDTH * 0.75; // uk body = 75% dari uk layar

// buat komponen signUp
const signUp3 = () => (
  <SafeAreaView style={styles.safe}>
    <Body>
      {/* header ttp stay saat discroll */}
      <Header />

      {/* scrollview hanya untuk body */}
      <ScrollView contentContainerStyle={styles.scroll}>
        {/* title + back button */}
        <View style={styles.titleRow}>
          <TouchableOpacity style={styles.backButton}>
            <Image
              source={require('../assets/back.png')}
              style={styles.backIcon}
            />
          </TouchableOpacity>
        </View>

        <Text style={styles.label2}>Choose your account type</Text>

        <View style={styles.optionRow}>
          <TouchableOpacity style={styles.optionCard}>
            <Image
              source={require('../assets/account.png')}
              style={styles.optionCardIcon}
            />
            <Text style={styles.label}>Teacher</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.optionCard}>
            <Image
              source={require('../assets/account.png')}
              style={styles.optionCardIcon}
            />
            <Text style={styles.label}>Student</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
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
    backgroundColor: '#F2A602',
    padding: 20,
    marginTop: 20,
  },
  cardTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#130E01',
    textAlign: 'center',
    marginLeft: 58,
  },
  label: {
    fontSize: 18,
    color: '#130E01',
    textAlign: 'center',
  },
  label2: {
    fontSize: 24,
    color: '#130E01',
    marginBottom: 10,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 120,
  },
  backButton: {
    padding: 10,
  },
  backIcon: {
    width: 35,
    height: 35,
  },
  optionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: CARD_WIDTH,
  },
  optionCard: {
    width: CARD_WIDTH / 2 - 20,
    backgroundColor: '#F2A602',
    padding: 4,
    alignItems: 'center',
    marginTop: 20,
    height: 150,
  },
  optionCardIcon: {
    width: 88,
    height: 88,
    marginBottom: 10,
    marginTop: 4,
  },
  titleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: CARD_WIDTH,
    marginTop: 20,
  },
});

// export komponen signUp
export default signUp3;
