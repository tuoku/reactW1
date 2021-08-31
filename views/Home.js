import React from 'react';
import {SafeAreaView, StatusBar, View} from 'react-native';
import List from '/home/tuomas/ReactProjects/MyApp/components/List.js';
import PropTypes from 'prop-types';

const Home = ({navigation}) => {
  return (
    <SafeAreaView style={{backgroundColor: '#202028', flexDirection: 'column'}}>
      <View>
        <List navigation={navigation}></List>
        <StatusBar backgroundColor="#202028"></StatusBar>
      </View>
    </SafeAreaView>
  );
};
Home.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default Home;
