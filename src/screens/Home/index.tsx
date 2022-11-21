import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Navigation} from 'react-native-navigation';
import styles from './styles';

function pushScreen () {
  // const {componentId} = props;
  // Navigation.push(componentId, {
  //   component: {
  //     name: 'PushedScreen',
  //   },
  // });
};
function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.buttonsSection}>
        <TouchableOpacity
          onPress={() => {}}
          style={styles.buttonWrapper}>
          <Text style={styles.buttonText}>Push Screen</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonWrapper}>
          <Text style={styles.buttonText}>open a modal</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;
