import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Container from '../../Components/Container';
import Toolbar from '../../Components/Toolbar';
import ModalList from './ModalList';
import { OpenModal } from '../../Config/NavigationComponent';
import { Routes } from '../../Navigation/ScreenName';
import Loader from '../../Components/Loader';
import { Navigation } from 'react-native-navigation';
/**
 * mymodal screen
 */
const MyModal = () => {
  return (
    <Container>
      <Toolbar
        label="My Modal"
        showBackButton={true}
        onBackPress={() => {
          Navigation.dismissAllModals();
        }}
        onPress={() => {
          OpenModal(Routes.Add);
        }}
        showAddtext={true}
      />
      <ModalList />
      <Loader />
    </Container>
  );
};

export default MyModal;

const styles = StyleSheet.create({});
