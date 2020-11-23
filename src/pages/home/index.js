import React from 'react';
import {ScrollView, Text} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faCoffee} from '@fortawesome/free-solid-svg-icons';

const Home = () => {
  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      // style={styles.scrollView}
    >
      <Text>Home</Text>
      <FontAwesomeIcon icon={faCoffee} />
    </ScrollView>
  );
};

export default Home;
