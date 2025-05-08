/* eslint-disable prettier/prettier */

// notes
// fungsi: tampung semua navigasi yang ada di aplikasi

import React from 'react';
import SignUp from '../pages/signUp/index';
import LogIn from '../pages/logIn/index';
import SignUpChooseAccountType from '../pages/signUp/chooseAccountType/index';
import SignUpChooseAccount from '../pages/signUp/chooseAccount/index';
import LogInChooseAccount from '../pages/logIn/chooseAccount/index';
import CreateQuiz from '../pages/createQuiz/index';
import ABOUTUS from '../pages/aboutUs/index';
import ChangePasswordScreen from '../pages/editPassword';
import EnterQuiz from '../pages/enterQuiz/index';
import Home from '../pages/home/index';
import MenuDrawer from '../pages/menu/index';
import ProfileScreen from '../pages/myProfile';
import QuestionStatisticsScreen from '../pages/questionReport';
// import QuizDetailsScreen from '../pages/quizDetail/index';
// import QuestionSideScreen from '../pages/createQuiz/questionSideScreen';
// import QuizQuestionScreen from '../pages/quizQuestion/index';
import QuizQuestionScreen2 from '../pages/quizQuestion/quizQuestion1';
import Report from '../pages/report/index';
// import ResultScreen from '../pages/result/index';
import ReviewScreen from '../pages/review';
import ReportSummaryScreen from '../pages/viewReport';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="signUp" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="signUp" component={SignUp} />
      <Stack.Screen name="logIn" component={LogIn} />
      <Stack.Screen name="chooseAccountType" component={SignUpChooseAccountType} />
      <Stack.Screen name="chooseAccount" component={SignUpChooseAccount} />
      <Stack.Screen name="logInChooseAccount" component={LogInChooseAccount} />
      <Stack.Screen name="createQuiz" component={CreateQuiz} />
      <Stack.Screen name="aboutUs" component={ABOUTUS} />
      <Stack.Screen name="changePassword" component={ChangePasswordScreen} />
      <Stack.Screen name="enterQuiz" component={EnterQuiz} />
      <Stack.Screen name="home" component={Home} />
      <Stack.Screen name="menuDrawer" component={MenuDrawer} />
      <Stack.Screen name="myProfile" component={ProfileScreen} />
      <Stack.Screen name="statistics" component={QuestionStatisticsScreen} />
      {/* <Stack.Screen name="quizDetail" component={QuizDetailsScreen} />
      <Stack.Screen name="questionSideScreen" component={QuestionSideScreen} /> */}
      {/* <Stack.Screen name="quizQuestionScreen1" component={QuizQuestionScreen} /> */}
      <Stack.Screen name="quizQuestionScreen2" component={QuizQuestionScreen2} />
      <Stack.Screen name="report" component={Report} />
      {/* <Stack.Screen name="result" component={ResultScreen} /> */}
      <Stack.Screen name="review" component={ReviewScreen} />
      <Stack.Screen name="viewReport" component={ReportSummaryScreen} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
