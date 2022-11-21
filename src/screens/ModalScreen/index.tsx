import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Navigation} from 'react-native-navigation';
import styles from './styles';

class ModalScreen extends Component {
  
  constructor(props:String) {
    super(props);
    Navigation.events().bindComponent(this);
  }

  navigationButtonPressed(buttonId:String) {
    if (buttonId === 'rightButton') {
      // Navigation.dismissModal(buttonId, options);
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.headerText}>asdasda</Text>
      </View>
    );
  }
}

export default ModalScreen;