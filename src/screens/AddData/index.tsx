import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Container from '../../Components/Container';
import Toolbar from '../../Components/Toolbar';
import AppInput from '../../Components/AppInput';
import Button from '../../Components/Button';
import { Navigation } from 'react-native-navigation';
import { useDispatch, useSelector } from 'react-redux';
import { FETCH_DATA } from '../../Redux/Actiontype';

const AddData = (props: any) => {
  const [text, setText] = React.useState('');
  const { users } = useSelector((state: any) => state.auth);
  const dispatch = useDispatch();

  /**
   * done button action
   */
  const handleDone = () => {
    var updateData = [{ name: text }, ...users];
    dispatch({ type: FETCH_DATA, payload: updateData });
    Navigation.dismissModal(props.componentId);
  };

  /**
   * add data screen UI
   */
  return (
    <Container>
      <Toolbar
        label="Add Data"
        showBackButton={true}
        onBackPress={() => {
          Navigation.dismissModal(props.componentId);
        }}
      />
      <AppInput value={text} onChangeText={e => setText(e)} />
      <Button label="Done" onPress={handleDone} />
    </Container>
  );
};

export default AddData;
