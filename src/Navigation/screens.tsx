import {Navigation} from 'react-native-navigation';
import Home from '../screens/Home';
import ModalScreen from '../screens/ModalScreen';
import MoreScreen from '../screens/MoreScreen';

export function registerScreens() {
  Navigation.registerComponent('HomeScreen', () => Home);
  Navigation.registerComponent('MoreScreen', () => MoreScreen);
    Navigation.registerComponent('ModalScreen', () => ModalScreen);
}
