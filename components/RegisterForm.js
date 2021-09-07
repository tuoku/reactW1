import PropTypes from 'prop-types';
import React from 'react';
import {View} from 'react-native';
import FormTextInput from './FormTextInput';
import {Button} from 'react-native';
import {register} from '../hooks/ApiHooks';
import {Alert} from 'react-native';
import useSignUpForm from '../hooks/RegisterHooks';

const RegisterForm = (props) => {
  const {inputs, handleInputChange} = useSignUpForm();
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
      <FormTextInput
        autoCapitalize="none"
        placeholder="email"
        onChangeText={(txt) => handleInputChange('email', txt)}
      />
      <FormTextInput
        autoCapitalize="none"
        placeholder="full name"
        onChangeText={(txt) => handleInputChange('full_name', txt)}
      />
      <Button title="Register!" onPress={doRegister} />
    </View>
  );
};
RegisterForm.propTypes = {
  navigation: PropTypes.object,
};

const doRegister = async () => {
  const serverResponse = await register(inputs);
  if (serverResponse) {
    Alert.alert(serverResponse.message);
  } else {
    Alert.alert('register failed');
  }
};



export default RegisterForm;
