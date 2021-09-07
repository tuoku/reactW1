import React from 'react';
import {TextInput} from 'react-native';
import {StyleSheet} from 'react-native';

const FormTextInput = ({style, ...otherProps}) => {
  return <TextInput style={[styles.textInput, style]} {...otherProps} />;
};

const styles = StyleSheet.create({
  textInput: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
  },
});

export default FormTextInput;
