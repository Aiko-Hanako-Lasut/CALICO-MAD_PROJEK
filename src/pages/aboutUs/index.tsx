/* eslint-disable prettier/prettier */

// notes
// fungsi: tampilkan halaman About Us aplikasi CALICO

import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  Button,
} from 'react-native';
import { NavigationProp } from '@react-navigation/native';
import Header from '../../components/molecules/header/header2';
import Body from '../../components/molecules/body/body2';
import { aiko, syeela, aulia, profile } from '../../assets';

interface AboutUsProps {
  navigation: NavigationProp<any>;
}

type TeamMember = {
  name: string;
};

const TEAM_MEMBERS: TeamMember[] = [
  { name: 'Aiko'},
  { name: 'Syeela'},
  { name: 'Aulia'},
];

const AboutUs: React.FC<AboutUsProps> = ({ navigation }) => {
  const goToHome = () => navigation.navigate('Home');

  return (
    <View style={styles.container}>
      <Header />
      <Body>
        <ScrollView contentContainerStyle={styles.content}>
          <Text style={styles.title}>ABOUT US</Text>

          <Text style={styles.subtitle}>WHAT IS CALICO?</Text>
          <Text style={styles.text}>
            CALICO adalah aplikasi kuis interaktif untuk pelajar dan guru. Guru dapat membuat kuis dan memantau hasil siswa, siswa dapat mengikuti kuis dengan kode yang diberikan. Aplikasi ini khusus untuk Universitas Klabat (UNKLAB).
          </Text>

          <Text style={styles.subtitle}>OUR TEAM</Text>
          <View style={styles.teamRow}>
            {TEAM_MEMBERS.map((member, idx) => (
              <View key={idx} style={styles.memberBox}>
                {/* tes */}
                <Image source={profile} style={styles.avatar} />
                <Text style={styles.memberName}>{member.name}</Text>
              </View>
            ))}
          </View>

          <Button title="Go to Home" onPress={() => navigation.navigate('home')} />
        </ScrollView>
      </Body>
    </View>
  );
};

export default AboutUs;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginVertical: 10,
    textDecorationLine: 'underline',
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
  text: {
    textAlign: 'center',
    fontSize: 14,
    lineHeight: 20,
    paddingHorizontal: 10,
  },
  teamRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  memberBox: {
    alignItems: 'center',
    marginHorizontal: 10,
  },
  avatar: {
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
