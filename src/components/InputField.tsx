import styled from 'styled-components';
import {TextInput, Dimensions} from 'react-native';
import React from 'react';

interface InputFieldProps {
  onChangeText: ((text: string) => void) | undefined;
  value: string;
  placeholder: string;
  secureTextEntry: boolean;
}

const InputField = (props: InputFieldProps) => {
  return (
    <Input
      autoCapitalize={'none'}
      onChangeText={props.onChangeText}
      value={props.value}
      placeholder={props.placeholder}
      maxLength={150}
      secureTextEntry={props.secureTextEntry}
    />
  );
};

export default InputField;

const Input = styled(TextInput)`
  height: 60px
  width: ${Dimensions.get('window').width - 40}px
  borderColor: gray
  backgroundColor: white
  borderWidth: 3px
  borderRadius: 18px
  padding: 10px
  marginTop: 15px
`;
