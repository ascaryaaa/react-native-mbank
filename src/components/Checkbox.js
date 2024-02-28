import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Import icons from Expo library

const Checkbox = ({ label, onChange }) => {
  const [checked, setChecked] = useState(false);

  const toggleCheckbox = () => {
    setChecked(!checked);
    if (onChange) {
      onChange(!checked);
    }
  };

  return (
    <TouchableOpacity onPress={toggleCheckbox} style={styles.checkboxContainer}>
      <Ionicons name={checked ? 'checkbox' : 'square-outline'} size={24} color={checked ? '#852884' : 'black'} />
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 10,
  },
  label: {
    paddingRight: 20,
    marginHorizontal: 10,
    fontSize: 12,
    textAlign: 'justify'
  },
});

export default Checkbox;
