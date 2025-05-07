/* eslint-disable prettier/prettier */

import React, {ReactNode} from 'react';
import {StyleSheet, TextInput, View, Text, TextInputProps} from 'react-native';

interface InputTextProps extends TextInputProps {
  label?: string;
  children?: ReactNode;
  style?: TextInputProps['style'];
}

const InputText: React.FC<InputTextProps> = ({
  label,
  placeholder,
  value,
  onChangeText,
  secureTextEntry = false,
  children,
  style,
}) => (
  <View style={styles.container}>
    {label != null && <Text style={styles.label}>{label}</Text>}
    <View style={styles.inputWrapper}>
      <TextInput
        style={[styles.input, style]}
        placeholder={placeholder}
        placeholderTextColor="#aaa"
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
      />
      {children != null && <View style={styles.iconContainer}>{children}</View>}
    </View>
  </View>
);

export default InputText;

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333',
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    backgroundColor: '#f9f9f9',
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#555',
    paddingVertical: 10,
  },
  iconContainer: {
    paddingLeft: 10,
  },
});
