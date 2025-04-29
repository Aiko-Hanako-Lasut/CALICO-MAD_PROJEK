import React from 'react';
import {StyleSheet, TouchableOpacity, Text, Image} from 'react-native';

const Button = ({
  title,
  onPress,
  backgroundColor = 'blue',
  textColor = 'white',
  iconSource, // Prop untuk menerima sumber gambar ikon
  iconStyle, // Prop opsional untuk mengatur gaya ikon
  iconPosition = 'right', // Prop untuk mengatur posisi ikon ('left' atau 'right')
}) => {
  const titleStyle = [styles.text, {color: textColor}];
  const buttonStyle = [styles.button, {backgroundColor}, styles.row]; // Tambahkan styles.row

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
    flexDirection: 'row', // Mengatur agar ikon dan teks berada dalam satu baris
  },
  icon: {
    width: 33, // Sesuaikan ukuran ikon sesuai kebutuhan
    height: 33,
    marginLeft: 8, // Jarak default ikon dari teks (jika di kanan)
  },
});

export default Button;
