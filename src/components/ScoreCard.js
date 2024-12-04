import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Platform } from 'react-native';

export default function ScoreCard({ team, score, onScoreChange }) {
  return (
    <View style={styles.card}>
      <Text style={styles.teamName}>Tim {team}</Text>
      <Text style={styles.score}>{score}</Text>
      <View style={styles.buttons}>
        <TouchableOpacity
          style={[styles.button, styles.buttonIncrease]}
          onPress={() => onScoreChange(team, 1)}
        >
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.buttonDecrease]}
          onPress={() => onScoreChange(team, -1)}
        >
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '80%', // Lebar kartu hampir penuh layar
    marginVertical: 10,
    padding: 25,
    backgroundColor: '#ffffff',
    borderRadius: 15,
    alignItems: 'center',
    alignSelf: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 5,
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  teamName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2c3e50',
  },
  score: {
    fontSize: 60,
    fontWeight: '700',
    color: '#34495e',
    marginVertical: 15,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  button: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
      },
      android: {
        elevation: 4,
      },
    }),
  },
  buttonIncrease: {
    backgroundColor: '#00008B', // Deep Blue untuk tombol tambah
  },
  buttonDecrease: {
    backgroundColor: '#800000', // Maroon untuk tombol kurangi
  },
  buttonText: {
    fontSize: 28,
    color: '#fff',
    fontWeight: 'bold',
  },
});
