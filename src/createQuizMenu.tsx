/* eslint-disable prettier/prettier */

/* halaman createQuizmenu + notes */

import React, {useState} from 'react';
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
import {Picker} from '@react-native-picker/picker';
import Header from '../components/header2';
import Body from '../components/body';
import Option from '../components/option';
import Footer from '../components/footer';

const {width: SCREEN_WIDTH} = Dimensions.get('window');
const CARD_WIDTH = SCREEN_WIDTH * 0.9;

/* uk body menyesuikan dgn uk layar */
export default function CreateQuizMenu() {
  const [questionType, setQuestionType] = useState('multiple');
  const [duration, setDuration] = useState('30');

  return (
    <SafeAreaView style={styles.safe}>
      <Body>
        <Header />
        <ScrollView contentContainerStyle={styles.scroll}>
          {/* INPUTS CONTAINER */}
          <View style={styles.container}>
            {/* LEFT PAGE CONTENT */}
            <View style={styles.leftPane}>
              <View style={styles.titleContainer}>
                <TextInput
                  style={styles.textInputTitle}
                  value="Finding Nemo (2003)"
                  placeholder="Enter your title..."
                  placeholderTextColor="#130E01"
                />
                <TouchableOpacity style={styles.menu}>
                  <Image
                    source={require('../assets/menu.png')}
                    style={styles.menuIcon}
                  />
                </TouchableOpacity>
              </View>

              <TextInput
                style={styles.textInputQuestion}
                placeholder="Type in your question..."
                placeholderTextColor="#130E01"
              />

              <TouchableOpacity style={styles.addImage}>
                <Image
                  source={require('../assets/photo.png')}
                  style={styles.addImageIcon}
                />
                <Text style={styles.addImageText}>Upload file</Text>
              </TouchableOpacity>

              <View style={styles.optionsRow}>
                <View style={styles.option}>
                  <Option prefix="A" />
                </View>
                <View style={styles.option}>
                  <Option prefix="B" />
                </View>
              </View>
              <View style={styles.optionsRow}>
                <View style={styles.option}>
                  <Option prefix="C" />
                </View>
                <View style={styles.option}>
                  <Option prefix="D" />
                </View>
              </View>
            </View>

            {/* OVERLAY SIDEBAR POP-UP */}
            <View style={styles.rightPaneOverlay}>
              <Text style={styles.label}>Question type</Text>
              <View style={styles.pickerWrapper}>
                <Picker
                  selectedValue={questionType}
                  onValueChange={setQuestionType}
                  style={styles.picker}>
                  <Picker.Item label="Multiple Choice" value="multiple" />
                  <Picker.Item label="True / False" value="tf" />
                </Picker>
              </View>

              <Text style={styles.label}>Duration</Text>
              <View style={styles.pickerWrapper}>
                <Picker
                  selectedValue={duration}
                  onValueChange={setDuration}
                  style={styles.picker}>
                  <Picker.Item label="30 seconds" value="30" />
                  <Picker.Item label="60 seconds" value="60" />
                </Picker>
              </View>

              <View style={styles.divider} />

              <TouchableOpacity style={styles.backButton}>
                <Image
                  source={require('../assets/back.png')}
                  style={styles.backIcon}
                />
              </TouchableOpacity>

              <TouchableOpacity style={styles.deleteButton}>
                <Text style={styles.deleteText}>Delete</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* BOTTOM NAVIGATION */}
          <View style={styles.bottomNav}>
            <TouchableOpacity style={[styles.navButton, styles.navActive]}>
              <Text style={styles.navText}>Question 1</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.navButton}>
              <Text style={styles.navText}>Question 2</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.addNavButton}>
              <Image
                source={require('../assets/add.png')}
                style={styles.addNavIcon}
              />
            </TouchableOpacity>
          </View>
        </ScrollView>
        <Footer />
      </Body>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {flex: 1},
  scroll: {
    alignItems: 'center',
    paddingBottom: 80,
  },
  container: {
    width: CARD_WIDTH,
    position: 'relative',
  },
  leftPane: {width: '100%'},
  rightPaneOverlay: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    width: CARD_WIDTH * 0.3,
    backgroundColor: '#F7F7F7',
    padding: 10,
    zIndex: 10,
    elevation: 10,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  textInputTitle: {
    flex: 1,
    height: 45,
    backgroundColor: '#FEFEFE',
    paddingHorizontal: 10,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#130E01',
    color: '#130E01',
  },
  menu: {marginLeft: 8},
  menuIcon: {width: 44, height: 45},
  textInputQuestion: {
    width: '100%',
    height: 45,
    backgroundColor: '#FEFEFE',
    paddingHorizontal: 10,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#130E01',
    color: '#130E01',
    marginBottom: 16,
  },
  addImage: {
    backgroundColor: '#D9D9D9',
    alignItems: 'center',
    padding: 20,
    marginBottom: 16,
  },
  addImageIcon: {width: 76, height: 71, marginBottom: 16},
  addImageText: {fontSize: 16, textDecorationLine: 'underline'},
  optionsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  option: {width: (CARD_WIDTH * 0.7) / 2 - 5},
  label: {fontSize: 14, color: '#130E01', marginBottom: 4},
  pickerWrapper: {
    borderWidth: 1,
    borderColor: '#130E01',
    marginBottom: 20,
  },
  picker: {height: 45, width: '100%'},
  divider: {
    height: 1,
    backgroundColor: '#C4C4C4',
    marginVertical: 20,
  },
  backButton: {
    position: 'absolute',
    bottom: 60,
    left: 10,
    width: 36,
    height: 36,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backIcon: {width: 24, height: 24},
  deleteButton: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    backgroundColor: '#E02A2A',
    borderRadius: 20,
    height: 35,
    paddingHorizontal: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  deleteText: {color: '#FEFEFE', fontSize: 14, fontWeight: 'bold'},
  bottomNav: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: SCREEN_WIDTH,
    backgroundColor: '#FFAC33',
    padding: 10,
  },
  navButton: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 8,
  },
  navActive: {
    borderWidth: 1,
    borderColor: '#130E01',
  },
  navText: {fontSize: 14, color: '#130E01'},
  addNavButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  addNavIcon: {width: 20, height: 20},
});
