import React from 'react';
import {Text, TextProps as TextProperties, TextStyle} from 'react-native';
import styles from './styles';

interface TextProps extends TextProperties {
  customStyle?: TextStyle;
}

const AppText = (props: TextProps) => {
  if (!props.children) return null;
  return (
    <Text style={[styles.container, props.customStyle]} {...props}>
      {props.children}
    </Text>
  );
};

export default AppText;
