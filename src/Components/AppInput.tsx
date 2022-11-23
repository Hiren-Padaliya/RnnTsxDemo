import { StyleSheet, Text, TextInput, View } from 'react-native';
import React from 'react';
import { INPUT_PROPS } from './props';

/**
 * custom input text component UI
 */
const AppInput = ({ value, onChangeText }: INPUT_PROPS) => {

  return <View style={styles.inputView}>
    <TextInput style={{ padding: 10, margin: 10, color: "black" }}
      value={value}
      onChangeText={onChangeText}
      placeholder='Add your text here'
      multiline
      placeholderTextColor={'gray'}
    />
  </View>;
};

export default AppInput;

const styles = StyleSheet.create({
  inputView: {
    height: 200,
    width: '90%',
    backgroundColor: 'white',
    shadowColor: 'grey',
    shadowOffset: { height: 1, width: 1 },
    shadowOpacity: 0.5,
    shadowRadius: 6,
    borderRadius: 10,
    alignSelf: 'center',
    marginTop: 20,
    elevation: 10,


  },
});
