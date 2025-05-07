/* eslint-disable prettier/prettier */

import React from 'react';
import {View, Text, Image, StyleSheet, ScrollView, Button} from 'react-native';
import Header from '../../components/molecules/header/header2';
import Body from '../../components/molecules/body/body2';
import {NavigationProp} from '@react-navigation/native';

interface ABOUTUSProps {
  navigation: NavigationProp<any>;
}

const teamMembers = [
  {name: 'Aiko', image: require('../../assets/aiko.png')},
  {name: 'Syeela', image: require('../../assets/syeels.png')},
  {name: 'Aulia', image: require('../../assets/aulia.png')},
];

const ABOUTUS: React.FC<ABOUTUSProps> = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Header />
      <Body>
        <ScrollView contentContainerStyle={styles.body}>
          <Text style={styles.title}>ABOUT US</Text>

          <Text style={styles.subheading}>WHAT IS CALICO?</Text>
          <Text style={styles.paragraph}>
            CALICO adalah aplikasi kuis interaktif untuk pelajar dan guru. Guru
            dapat membuat kuis dan memantau hasil siswa, siswa dapat mengikuti
            kuis dengan kode yang diberikan. Aplikasi ini khusus untuk
            Universitas Klabat (UNKLAB).
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

          <Button
            title="Go to Home"
            onPress={() => navigation.navigate('Home')}
          />
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

export default ABOUTUS;
