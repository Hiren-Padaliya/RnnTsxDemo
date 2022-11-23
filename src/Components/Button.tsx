import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Touchable,
} from 'react-native';
import React from 'react';
import { Colors } from '../Config/Colors';
import { IProps } from './props';
/**
 * custom button component UI
 */
const Button = ({ label, onPress }: IProps) => {
  return (
    <TouchableOpacity
      style={styles.botton}
      activeOpacity={0.8}
      onPress={onPress}>
      <Text style={styles.text}>{label}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  botton: {
    height: 50,
    width: '60%',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: Colors.themeBlue,
    marginTop: 60,
    borderRadius: 10,
    elevation: 5

  },
  text: {
    fontSize: 17,
    fontWeight: '600',
    color: 'white',
  },
});
