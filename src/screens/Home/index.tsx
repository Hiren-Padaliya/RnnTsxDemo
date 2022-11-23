import { View } from 'react-native';
import React from 'react';
import Container from '../../Components/Container';
import Toolbar from '../../Components/Toolbar';

const Home = () => {
  return (<Container>
    <Toolbar
      label="Home"
      showAddtext={false}
    />

  </Container>)
};

export default Home;
