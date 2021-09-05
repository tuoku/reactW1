import React from 'react';
import {StyleSheet, SafeAreaView, Text, Button} from 'react-native';
import {useContext} from 'react';
import {MainContext} from '../contexts/MainContext';
import PropTypes from 'prop-types';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Profile = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useContext(MainContext);
  console.log('profile', isLoggedIn);
  const logout = async () => {
    setIsLoggedIn(false);
    await AsyncStorage.clear();
    props.navigation.navigate('Login');
  };
  return (
    <SafeAreaView style={styles.container}>
      <Text>Profile</Text>
      <Button title={'Logout'} onPress={logout} />
    </SafeAreaView>
  );
};

Profile.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 40,
  },
});

export default Profile;
