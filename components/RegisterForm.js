import React from 'react';
import PropTypes from 'prop-types';
import {View} from 'react-native';
import useSignUpForm from '../hooks/RegisterHooks';
import {Input, Button} from 'react-native-elements';

const RegisterForm = ({navigation}) => {
  const {handleInputChange} = useSignUpForm();

  const doRegister = () => {
    // TODO: add register() to useUser() hook in API hooks
  };

  return (
    <View>
      <Input
        autoCapitalize="none"
        placeholder="username"
        onChangeText={(txt) => handleInputChange('username', txt)}
      />
      <Input
        autoCapitalize="none"
        placeholder="password"
        onChangeText={(txt) => handleInputChange('password', txt)}
        secureTextEntry={true}
      />
      <Input
        autoCapitalize="none"
        placeholder="email"
        onChangeText={(txt) => handleInputChange('email', txt)}
      />
      <Input
        autoCapitalize="none"
        placeholder="full name"
        onChangeText={(txt) => handleInputChange('full_name', txt)}
      />
      <Button title="Register!" onPress={doRegister} />
    </View>
  );
};

RegisterForm.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default RegisterForm;
