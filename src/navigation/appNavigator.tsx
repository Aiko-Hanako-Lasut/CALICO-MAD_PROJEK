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
    </Stack.Navigator>
  );
};

export default AppNavigator;
