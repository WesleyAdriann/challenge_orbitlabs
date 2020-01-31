import React from 'react';
import {View, Text} from 'react-native';

import {Label, InputStyled, InputStyledMask} from './style';

const Input = ({label, onChange, placeholder, value, phoneMask = false}) => (
  <View>
    <Label>{label}</Label>
    {phoneMask ? (
      <InputStyledMask
        type={'cel-phone'}
        options={{
          maskType: 'BRL',
          withDDD: true,
          dddMask: '(99) ',
        }}
        value={value}
        onChangeText={onChange}
      />
    ) : (
      <InputStyled
        placeholder={placeholder}
        value={value}
        onChangeText={onChange}
      />
    )}
  </View>
);

export default Input;
