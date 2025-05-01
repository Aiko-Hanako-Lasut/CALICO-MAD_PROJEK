/* eslint-disable prettier/prettier */

/* komponen option + notes */

import React from 'react';
import {StyleSheet, View, TextInput, Text} from 'react-native';

const Option = ({prefix}) => (
  <View style={styles.container}>
    {/* kolom prefix */}
    <View style={styles.prefixBox}>
      <Text style={styles.prefixText}>{prefix}</Text>
    </View>

    {/* kolom input */}
    <TextInput
      style={styles.input}
      placeholder="Add answer..."
      placeholderTextColor="#130E01"
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: 165,
    height: 45,
    borderWidth: 1,
    borderColor: '#000',
    overflow: 'hidden',
    marginVertical: 8,
  },
  prefixBox: {
    width: 45,
    height: 45,
    borderRightWidth: 1,
    borderColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F2A602',
  },
  prefixText: {
    fontSize: 16,
    color: '#130E01',
  },
  input: {
    flex: 1,
    paddingHorizontal: 12,
    fontSize: 16,
    color: '#130E01',
    backgroundColor: '#FEFEFE',
  },
});
export default Option;
