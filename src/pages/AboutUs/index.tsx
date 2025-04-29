import React from 'react';
import {View, Text, Image, StyleSheet, ScrollView} from 'react-native';
import Header from '@komponen/Header';
import Body from '@komponen/Body'; // <--- kamu sudah buat ini

const teamMembers = [
  {name: 'Aiko', image: require('@assets/iconimage.png')},
  {name: 'Syeela', image: require('@assets/iconimage.png')},
  {name: 'Aulia', image: require('@assets/iconimage.png')},
];

const About = () => {
  return (
    <View style={styles.container}>
      <Header />
      <Body>
        <ScrollView contentContainerStyle={styles.body}>
          <Text style={styles.title}>ABOUT US</Text>

          <Text style={styles.subheading}>WHAT IS CALICO?</Text>
          <Text style={styles.paragraph}>
            Quae tibi placent quicung prosunt aut diligebat multum, quod memor
            sis ad communia sunt ab initio minima. Quod si, exempli gratia,
            cupidum rerum in.
          </Text>

          <Text style={styles.subheading}>OUR TEAM</Text>
          <View style={styles.teamContainer}>
            {teamMembers.map((member, index) => (
              <View key={index} style={styles.member}>
                <Image source={member.image} style={styles.memberImage} />
                <Text style={styles.memberName}>{member.name}</Text>
              </View>
            ))}
          </View>
        </ScrollView>
      </Body>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  body: {
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginVertical: 10,
    textDecorationLine: 'underline',
  },
  subheading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
  paragraph: {
    textAlign: 'center',
    fontSize: 14,
    lineHeight: 20,
    paddingHorizontal: 10,
  },
  teamContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  member: {
    alignItems: 'center',
    marginHorizontal: 10,
  },
  memberImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#ccc',
  },
  memberName: {
    marginTop: 5,
    fontSize: 14,
    fontWeight: '500',
  },
});

export default About;
