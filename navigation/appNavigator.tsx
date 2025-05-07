import {createStackNavigator} from '@react-navigation/stack';
import AboutUS from '../screens/ABOUTUS'; // Your About Us component
import CreateQuiz from '../screens/CreateQuiz';
import Report from '../screens/Report';

const Stack = createStackNavigator();

const AppNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="AboutUS" component={AboutUS} />
    <Stack.Screen name="CreateQuiz" component={CreateQuiz} />
    <Stack.Screen name="Report" component={Report} />
  </Stack.Navigator>
);
