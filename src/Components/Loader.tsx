import { StyleSheet, View, ActivityIndicator } from 'react-native';
import React from 'react';
import { Colors } from '../Config/Colors';
import { useSelector } from 'react-redux';

/**
 * custom loader
 */
const Loader = () => {
  const { loading } = useSelector((state: any) => state.auth);
  return loading ? (
    <View style={styles.loaderView}>
      <ActivityIndicator color={Colors.themeBlue} size={'large'} />
    </View>
  ) : null;
};

export default Loader;

const styles = StyleSheet.create({
  loaderView: {
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    backgroundColor: '#00000044',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
