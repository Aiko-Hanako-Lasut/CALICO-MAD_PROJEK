/* eslint-disable prettier/prettier */

/* halaman signUp2 + notes */

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
const signUp2 = () => (
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
          <Text style={styles.cardTitle}>Sign Up</Text>
        </View>

        {/* card */}
        <View style={styles.card}>
          <Text style={styles.label}>Choose an account</Text>

          <TouchableOpacity style={styles.accountRow}>
            <Image
              source={require('../assets/account.png')}
              style={styles.accountIcon}
            />
            <View style={styles.accountTextContainer}>
              <Text style={styles.accountName}>Syeela Tes</Text>
              <Text style={styles.accountEmail}>syeelates@gmail.com</Text>
            </View>
          </TouchableOpacity>

          <View style={styles.loginRow}>
            <Text style={styles.loginPrompt}>Already have an account?</Text>
            <TouchableOpacity>
              <Text style={styles.loginLink}>Log In</Text>
            </TouchableOpacity>
          </View>
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
    marginBottom: 10,
  },
  loginRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 8,
    marginTop: 16,
  },
  loginPrompt: {
    textAlign: 'center',
    color: '#130E01',
    fontSize: 14,
    fontWeight: 'bold',
    marginRight: 5,
  },
  loginLink: {
    color: '#007BFF',
    fontWeight: 'bold',
    fontSize: 14,
  },
  accountRow: {
    flexDirection: 'row',
    backgroundColor: '#FEFEFE',
    padding: 4,
    alignItems: 'center',
    marginBottom: 10,
  },
  accountTextContainer: {
    flex: 1,
  },
  accountIcon: {
    width: 60,
    height: 60,
  },
  accountName: {
    fontSize: 16,
    color: '#130E01',
  },
  accountEmail: {
    fontSize: 12,
    color: '#130E01',
  },
  titleRow: {
    width: CARD_WIDTH,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 68,
  },
  backButton: {
    padding: 10,
  },
  backIcon: {
    width: 35,
    height: 35,
  },
});

// export komponen signUp
export default signUp2;
