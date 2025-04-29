/**
 * @format
 */

import {AppRegistry} from 'react-native';
import AboutUs from '@pages/AboutUs';
import MyProfil from '@pages/MyProfile';
import editpass from '@pages/editpass';
import Home from '@pages/Home';
import Report from '@pages/Report';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Report);
