/* eslint-disable prettier/prettier */

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import Header from '../../components/molecules/header/header2';
import Body from '../../components/molecules/body/body2';
import { NavigationProp } from '@react-navigation/native';
import { back, checklist, editIcon, profileIcon, questionMark, reportNotes, statistics } from '../../assets';

interface QuestionStatisticsScreenProps {
  navigation: NavigationProp<any>;
}

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

const QuestionStatisticsScreen: React.FC<QuestionStatisticsScreenProps> = ({navigation}) => {
  const improvementAreas: ImprovementArea[] = [
    {
      title: 'Area 1',
      description: 'Focus on improving these questions.',
      stats: [
        {question: 'Question F', correctAnswer: '5/15', successRate: '10 %'},
        {question: 'Question B', correctAnswer: '10/15', successRate: '65 %'},
        {question: 'Question C', correctAnswer: '8/15', successRate: '30 %'},
      ],
    },
    {
      title: 'Area 2',
      description: 'These questions performed well.',
      stats: [
        {question: 'Question A', correctAnswer: '15/15', successRate: '100 %'},
        {question: 'Question B', correctAnswer: '10/15', successRate: '65 %'},
        {question: 'Question C', correctAnswer: '8/15', successRate: '30 %'},
      ],
    },
  ];

  const handleReportSummaryPress = () => {
    console.log('Report Summary Pressed');
  };

  const handleQuestionStatisticsPress = () => {
    console.log('Question Statistics Pressed');
  };

  const handleViewProfilePress = () => {
    console.log('View Profile Pressed');
  };

  const handleChangePasswordPress = () => {
    console.log('Change Password Pressed');
  };

  interface FooterItem {
    label: string;
    iconSource: any;
    onPress: () => void;
    accessibilityLabel: string;
    onChangePassword?: () => void;
    onViewProfile?: () => void;
  }
  
    const footerItems: FooterItem[] = [
      {
      label: 'Report Summary',
      iconSource: reportNotes,
      onPress: handleReportSummaryPress,
      accessibilityLabel: 'Report Summary Button',
    },
    {
      label: 'Question Statistics',
      iconSource: statistics,
      onPress: handleQuestionStatisticsPress,
      accessibilityLabel: 'Question Statistics Button',
    },
  ];

  return (
    <View style={styles.container}>
      <Header/>
      <Body>
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.backButton}>
            <Image
              source={back}
              style={styles.backIcon}
              resizeMode="contain"
            />
            <Text style={styles.backText}>Back</Text>
          </TouchableOpacity>
        </View>
        <ScrollView style={styles.content}>
          {improvementAreas.map((area, index) => (
            <View key={index} style={styles.improvementArea}>
              {area.description && (
                <Text style={styles.areaDescription}>{area.description}</Text>
              )}
              <View style={styles.tableHeader}>
                <Image
                  source={questionMark}
                  style={styles.rateIcon}
                  resizeMode="contain"
                />
                <Text style={[styles.headerCell, {flex: 2}]}>Question</Text>
                <Image
                  source={checklist}
                  style={styles.correctIcon}
                  resizeMode="contain"
                />
                <Text style={[styles.headerCell, {flex: 2}]}>
                  Correct Answer
                </Text>
                <Text style={[styles.headerCell, {flex: 2}]}>
                  %Success Rate
                </Text>
              </View>
              {area.stats.map((stat, statIndex) => (
                <View key={statIndex} style={styles.tableRow}>
                  <Text style={[styles.cell, {flex: 2}]}>{stat.question}</Text>
                  <Text style={[styles.cell, {flex: 1}]}>
                    {stat.correctAnswer}
                  </Text>
                  <Text style={[styles.cell, {flex: 1}]}>
                    {stat.successRate}
                  </Text>
                </View>
              ))}
              {index < improvementAreas.length - 1 && (
                <View style={styles.separator} />
              )}
            </View>
          ))}
        </ScrollView>
      </Body>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  header: {
    backgroundColor: '#F5F5F5',
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
    tintColor: '#000',
  },
  backText: {
    marginLeft: 5,
    fontSize: 16,
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
    tintColor: '#000',
  },

  tableHeader: {
    flexDirection: 'row',
    marginBottom: 8,
    paddingHorizontal: 5,
    alignItems: 'center',
  },
  headerCell: {
    fontWeight: 'bold',
    fontSize: 8,
    color: '#333',
    textAlign: 'left',
  },
  correctIcon: {
    width: 20,
    height: 20,
    marginRight: 5,
    tintColor: '#000',
  },
  rateIcon: {
    width: 20,
    height: 20,
    marginRight: 5,
    tintColor: '#000',
  },
  tableRow: {
    flexDirection: 'row',
    paddingVertical: 8,
    paddingHorizontal: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    alignItems: 'center',
  },
  cell: {
    fontSize: 10,
    color: '#555',
    textAlign: 'left',
  },
  separator: {
    height: 1,
    backgroundColor: '#ddd',
    marginVertical: 15,
  },
  areaDescription: {
    fontSize: 14,
    color: '#333',
    marginBottom: 10,
  },
});

export default QuestionStatisticsScreen;
