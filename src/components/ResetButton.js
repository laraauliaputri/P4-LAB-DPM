import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function ResetButton({ onReset }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.resetButton} onPress={onReset}>
        <Text style={styles.resetText}>Reset</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    alignItems: 'center',
  },
  resetButton: {
    backgroundColor: '#800000', // Maroon sebagai latar tombol
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 18,
    borderWidth: 4,
    borderColor: '#00008B', // Deep Blue sebagai border
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 5,
  },
  resetText: {
    color: '#FFFFFF', // Teks putih untuk kontras
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
