import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Container from '../../Components/Container';
import Button from '../../Components/Button';
import { OpenModal } from '../../Config/NavigationComponent';
import { Routes } from '../../Navigation/ScreenName';
import Toolbar from '../../Components/Toolbar';

/**
 * more screen
 */
const More = () => {
  return (
    <Container>
      <Toolbar
        label="More"
      />
      <Button
        label="Open Modal"
        onPress={() => {
          OpenModal(Routes.Modal);
        }}
      />
    </Container>
  );
};

export default More;

const styles = StyleSheet.create({});
