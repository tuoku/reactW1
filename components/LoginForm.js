import PropTypes from 'prop-types';
import React from 'react';
import {View} from 'react-native';
import FormTextInput from './FormTextInput';
import {Button} from 'react-native';
import {useLogin} from '../hooks/ApiHooks';
import {Alert} from 'react-native';
import useLoginForm from '../hooks/LoginHooks';

const LoginForm = (props) => {
  const {inputs, handleInputChange} = useLoginForm();
  return (
    <View>
      <FormTextInput
        autoCapitalize="none"
        placeholder="username"
        onChangeText={(txt) => handleInputChange('username', txt)}
      />
      <FormTextInput
        autoCapitalize="none"
        placeholder="password"
        onChangeText={(txt) => handleInputChange('password', txt)}
        secureTextEntry={true}
      />
      <Button title="Login!" onPress={doLogin} />
    </View>
  );
};

LoginForm.propTypes = {
  navigation: PropTypes.object,
};

const doLogin = async () => {
  const serverResponse = await useLogin();
  if (serverResponse) {
    Alert.alert(serverResponse.message);
  } else {
    Alert.alert('register failed');
  }
};

export default LoginForm;
