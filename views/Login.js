import React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import PropTypes from 'prop-types';
import {useContext, useEffect} from 'react';
import {MainContext} from '../contexts/MainContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useLogin} from '../hooks/ApiHooks';
import LoginForm from '../components/LoginForm';
import RegisterForm from '../components/RegisterForm';

const Login = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useContext(MainContext);
  console.log('ili', isLoggedIn);
  const logIn = async () => {
    const token = await useLogin();
    if (token != null) {
      await AsyncStorage.setItem('userToken', token);
      setIsLoggedIn(true);
    }
  };
  const getToken = async () => {
    const userToken = await AsyncStorage.getItem('userToken');
    console.log('token', userToken);
    const res = await fetch('https://media.mw.metropolia.fi/wbma/users/user', {
      headers: {
        'x-access-token': userToken,
      },
    });
    if (res.status == 200) {
      setIsLoggedIn(true);
    }
  };
  useEffect(() => {
    getToken();
    if (isLoggedIn) {
      props.navigation.navigate('Home');
    }
  }, []);
  return (
    <View style={styles.container}>
      <Text>Login</Text>
      <LoginForm navigation={props.navigation} />
      <RegisterForm navigation={props.navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

Login.propTypes = {
  navigation: PropTypes.object,
};

export default Login;
