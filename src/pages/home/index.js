import React from 'react';
import {ScrollView, Text} from 'react-native';

{
  /* <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
  <Text>Home screen</Text>
  <Button
    title="Go to Details"
    onPress={() => navigation.navigate('Details')}
  />
</View>; */
}

const Home = () => {
  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      // style={styles.scrollView}
    >
      <Text>Home</Text>
    </ScrollView>
  );
};

export default Home;
