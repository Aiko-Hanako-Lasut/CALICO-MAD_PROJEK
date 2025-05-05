/* eslint-disable prettier/prettier */

import React from 'react';
import EnterQuiz from '../screens/EnterQuiz.tsx';
import QuizDetailScreen from '../screens/QuizDetailScreen.tsx';
import QuizScreen from '../screens/QuizQuestionScreen2.tsx';
import QuizQuestionScreen from '../screens/QuizQuestionScreen.tsx';
import ResultScreen from '../screens/ResultScreen.tsx';
import ReviewScreen from '../screens/ReviewScreen.tsx';
import ABOUTUS from '../pagesaiko/ABOUTUS';
import MyProfil from '../pagesaiko/MyProfile';
import editpass from '../pagesaiko/editpass';
import Home from '../pagesaiko/Home';
import Report from '../pagesaiko/Report';
import ViewReport from '../pagesaiko/ViewReport';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="signUp"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="enterQuiz" component={EnterQuiz} />
      <Stack.Screen name="quizDetailScreen" component={QuizDetailScreen} />
      <Stack.Screen name="quizScreen" component={QuizScreen} />
      <Stack.Screen name="quizQuestionScreen" component={QuizQuestionScreen} />
      <Stack.Screen name="resultScreen" component={ResultScreen} />
      <Stack.Screen name="reviewScreen" component={ReviewScreen} />
      <Stack.Screen name="home" component={Home} />
      <Stack.Screen name="report" component={Report} />
      <Stack.Screen name="viewReport" component={ViewReport} />
      <Stack.Screen name="aboutUs" component={ABOUTUS} />
      <Stack.Screen name="myProfil" component={MyProfil} />
      <Stack.Screen name="editPass" component={editpass} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
