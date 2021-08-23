import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import List from '/home/tuomas/ReactProjects/MyApp/components/List.js';

const App = () => {
  return (
    <SafeAreaView>
      <List></List>
      <StatusBar style="auto"></StatusBar>
    </SafeAreaView>
  );
};

export default App;
