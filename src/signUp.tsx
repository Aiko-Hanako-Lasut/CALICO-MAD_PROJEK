/* eslint-disable prettier/prettier */

/* halaman signUp + notes */

import React from 'react'; // import React (buat komponen)
import {
  SafeAreaView, // pisahkan header dan body
  ScrollView, // scroll
  View, // kontainer
  Text, // teks
  TextInput, // input teks
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
const signUp = () => (
  <SafeAreaView style={styles.safe}>
    <Body>
      {/* header ttp stay saat discroll */}
      <Header />

      {/* scrollview hanya untuk body */}
      <ScrollView contentContainerStyle={styles.scroll}>
        {/* title */}
        <Text style={styles.cardTitle}>Sign Up</Text>

        {/* card */}
        <View style={styles.card}>
          <Text style={styles.label}>Username or email</Text>
          <TextInput
            placeholder=""
            placeholderTextColor="#130E01"
            style={styles.input}
          />

          <Text style={styles.label}>Password</Text>
          <TextInput
            placeholder=""
            placeholderTextColor="#130E01"
            secureTextEntry
            style={styles.input}
          />

          <TouchableOpacity style={styles.signupButton}>
            <Text style={styles.signupText}>Sign Up</Text>
          </TouchableOpacity>

          <Text style={styles.divider}>──────────── or ────────────</Text>

          <TouchableOpacity style={styles.googleButton}>
            <Image
              source={require('../assets/google.png')}
              style={styles.googleIcon}
            />
            <Text style={styles.googleText}>Continue with Google</Text>
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
    marginTop: 80,
  },
  label: {
    fontSize: 18,
    color: '#130E01',
    marginBottom: 10,
  },
  input: {
    backgroundColor: '#FEFEFE',
    borderRadius: 30,
    marginBottom: 16,
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  signupButton: {
    backgroundColor: '#28A745',
    borderRadius: 30,
    paddingVertical: 10,
    alignItems: 'center',
    marginBottom: 16,
    marginTop: 24,
  },
  signupText: {
    color: '#FEFEFE',
    fontSize: 18,
    fontWeight: 'bold',
  },
  divider: {
    textAlign: 'center',
    color: '#130E01',
    marginVertical: 16,
    fontSize: 14,
  },
  googleButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#DB4437',
    borderRadius: 30,
    paddingVertical: 10,
    justifyContent: 'center',
    marginBottom: 16,
    marginTop: 16,
  },
  googleIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  googleText: {
    color: '#FEFEFE',
    fontSize: 18,
    fontWeight: 'bold',
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
});

// export komponen signUp
export default signUp;
