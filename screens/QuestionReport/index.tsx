import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import Header from '../../components/MOLEKUL/Header';

interface QuestionStat {
  question: string;
  correctAnswer: string;
  successRate: string;
}

interface ImprovementArea {
  title: string;
  description: string;
  stats: QuestionStat[];
}

const QuestionStatisticsScreen = ({navigation}) => {
  const improvementAreas: ImprovementArea[] = [
    {
      title: 'Provide more practice or explanations',
      description: 'set standard',
      stats: [
        {question: 'Question F', correctAnswer: '5/15', successRate: '10 %'},
        {question: 'Question B', correctAnswer: '10/15', successRate: '65 %'},
        {question: 'Question C', correctAnswer: '8/15', successRate: '30 %'},
      ],
    },
    {
      title: 'No specific area for improvement',
      description: '',
      stats: [
        {question: 'Question A', correctAnswer: '15/15', successRate: '100 %'},
        {question: 'Question B', correctAnswer: '10/15', successRate: '65 %'},
        {question: 'Question C', correctAnswer: '8/15', successRate: '30 %'},
      ],
    },
    // Tambahkan area peningkatan lainnya sesuai kebutuhan
  ];

  return (
    <View style={styles.container}>
      <Header navigation={navigation} />
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}>
          <Image
            source={require('../../assets/backicon.png')} // Ganti dengan path ikon back Anda
            style={styles.backIcon}
            resizeMode="contain"
          />
          <Text style={styles.backText}>Back</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Question Statistics</Text>
      </View>
      <ScrollView style={styles.content}>
        {improvementAreas.map((area, index) => (
          <View key={index} style={styles.improvementArea}>
            <View style={styles.areaHeader}>
              <Image
                source={require('../../assets/secretEYE.png')} // Ganti dengan path ikon help Anda
                style={styles.helpIcon}
                resizeMode="contain"
              />
              <Text style={styles.areaTitle}>{area.title}</Text>
            </View>
            {area.description && (
              <Text style={styles.areaDescription}>{area.description}</Text>
            )}
            <View style={styles.tableHeader}>
              <Text style={[styles.headerCell, {flex: 2}]}>Question</Text>
              <Image
                source={require('../../assets/secretEYE.png')} // Ganti dengan path ikon checkmark Anda
                style={styles.correctIcon}
                resizeMode="contain"
              />
              <Text style={[styles.headerCell, {flex: 1}]}>Correct Answer</Text>
              <Image
                source={require('../../assets/secretEYE.png')} // Ganti dengan path ikon trending up Anda
                style={styles.rateIcon}
                resizeMode="contain"
              />
              <Text style={[styles.headerCell, {flex: 1}]}>%Success Rate</Text>
            </View>
            {area.stats.map((stat, statIndex) => (
              <View key={statIndex} style={styles.tableRow}>
                <Text style={[styles.cell, {flex: 2}]}>{stat.question}</Text>
                <Text style={[styles.cell, {flex: 1}]}>
                  {stat.correctAnswer}
                </Text>
                <Text style={[styles.cell, {flex: 1}]}>{stat.successRate}</Text>
              </View>
            ))}
            {index < improvementAreas.length - 1 && (
              <View style={styles.separator} />
            )}
          </View>
        ))}
      </ScrollView>
      <View style={styles.bottomNavigation}>
        <TouchableOpacity style={styles.bottomButton}>
          <Image
            source={require('../../assets/reportnote.png')} // Ganti dengan path ikon document Anda
            style={styles.bottomIcon}
            resizeMode="contain"
          />
          <Text style={styles.bottomButtonText}>Report Summary</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.bottomButton, styles.activeBottomButton]}>
          <Image
            source={require('../../assets/statistics.png')} // Ganti dengan path ikon stats Anda
            style={styles.bottomIcon}
            resizeMode="contain"
          />
          <Text style={styles.bottomButtonText}>Questions Statistics</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  header: {
    backgroundColor: '#FFDA63',
    paddingVertical: 15,
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  backIcon: {
    width: 24,
    height: 24,
    marginRight: 5,
    tintColor: '#000', // Jika ikon Anda perlu diwarnai
  },
  backText: {
    marginLeft: 5,
    fontSize: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    paddingHorizontal: 15,
    paddingTop: 15,
  },
  improvementArea: {
    marginBottom: 20,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  areaHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  helpIcon: {
    width: 20,
    height: 20,
    marginRight: 8,
    tintColor: '#000', // Jika ikon Anda perlu diwarnai
  },
  areaTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  areaDescription: {
    fontSize: 14,
    color: '#555',
    marginBottom: 10,
  },
  tableHeader: {
    flexDirection: 'row',
    marginBottom: 8,
    paddingHorizontal: 5,
    alignItems: 'center', // Agar ikon dan teks sejajar
  },
  headerCell: {
    fontWeight: 'bold',
    fontSize: 14,
    color: '#333',
    textAlign: 'left',
  },
  correctIcon: {
    width: 20,
    height: 20,
    marginRight: 5,
    tintColor: '#000', // Jika ikon Anda perlu diwarnai
  },
  rateIcon: {
    width: 20,
    height: 20,
    marginRight: 5,
    tintColor: '#000', // Jika ikon Anda perlu diwarnai
  },
  tableRow: {
    flexDirection: 'row',
    paddingVertical: 8,
    paddingHorizontal: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    alignItems: 'center', // Agar ikon (jika ada nanti) dan teks sejajar
  },
  cell: {
    fontSize: 14,
    color: '#555',
    textAlign: 'left',
  },
  separator: {
    height: 1,
    backgroundColor: '#ddd',
    marginVertical: 15,
  },
  bottomNavigation: {
    backgroundColor: '#FFDA63',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 15,
  },
  bottomButton: {
    flex: 1,
    alignItems: 'center',
  },
  bottomIcon: {
    width: 24,
    height: 24,
    tintColor: '#000', // Jika ikon Anda perlu diwarnai
  },
  activeBottomButton: {
    // Style untuk tombol aktif jika diperlukan
  },
  bottomButtonText: {
    fontSize: 12,
    marginTop: 5,
  },
});

export default QuestionStatisticsScreen;
