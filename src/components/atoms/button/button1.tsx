import React from 'react';
import {StyleSheet, TouchableOpacity, Text, Image} from 'react-native';

interface ButtonProps {
  title: string;
  onPress: () => void;
  backgroundColor?: string;
  textColor?: string;
  iconSource?: any;
  iconStyle?: object;
  iconPosition?: 'left' | 'right';
}

const Button: React.FC<ButtonProps> = ({
  title,
  onPress,
  backgroundColor = 'blue',
  textColor = 'white',
  iconSource,
  iconStyle,
  iconPosition = 'right',
}) => {
  const titleStyle = [styles.text, {color: textColor}];
  const buttonStyle = [styles.button, {backgroundColor}, styles.row];

  return (
    <TouchableOpacity style={buttonStyle} onPress={onPress}>
      {iconSource && iconPosition === 'left' && (
        <Image source={iconSource} style={[styles.icon, iconStyle]} />
      )}
      <Text style={titleStyle}>{title}</Text>
      {iconSource && iconPosition === 'right' && (
        <Image source={iconSource} style={[styles.icon, iconStyle]} />
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'blue',
    paddingVertical: 12,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  row: {
    flexDirection: 'row',
  },
  icon: {
    width: 33,
    height: 33,
    marginLeft: 8,
  },
});

export default Button;
