import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';
import {Navigation} from 'react-native-navigation';

const openModal = () => {
  Navigation.showModal({
    stack: {
      children: [
        {
          component: {
            name: 'ModalScreen',
            passProps: {
              text: 'This is the modal screen',
            },
            options: {
              topBar: {
                title: {
                  text: 'My Modal',
                    alignment : 'center',
                },
                rightButtons: [
                  {
                    color: 'blue',
                    text: 'Add',
                    allCaps: false,
                    id: 'rightButton',
                  },
                ],
              },
            },
          },
        },
      ],
    },
  });
};
function MoreScreen() {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={openModal}>
        <Text style={styles.backButtonText}>Open Model</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MoreScreen;
