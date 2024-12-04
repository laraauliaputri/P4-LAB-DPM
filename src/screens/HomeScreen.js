import React, { useState } from 'react';
import { View, Text, StyleSheet, Alert, Modal, TouchableOpacity } from 'react-native';
import ScoreCard from '../components/ScoreCard';
import ResetButton from '../components/ResetButton';

export default function HomeScreen() {
  const [teamAScore, setTeamAScore] = useState(0);
  const [teamBScore, setTeamBScore] = useState(0);
  const [winner, setWinner] = useState(null); // Menyimpan tim yang menang
  const [modalVisible, setModalVisible] = useState(false); // Modal untuk menang

  const handleScoreChange = (team, delta) => {
    if (team === 'A') {
      const newScore = Math.max(0, teamAScore + delta);
      setTeamAScore(newScore);
      if (newScore === 10 && !winner) {
        setWinner('A');
        setModalVisible(true); // Tampilkan modal jika Tim A menang
      }
    } else if (team === 'B') {
      const newScore = Math.max(0, teamBScore + delta);
      setTeamBScore(newScore);
      if (newScore === 10 && !winner) {
        setWinner('B');
        setModalVisible(true); // Tampilkan modal jika Tim B menang
      }
    }
  };

  const resetScores = () => {
    setTeamAScore(0);
    setTeamBScore(0);
    setWinner(null);
    setModalVisible(false); // Reset juga status modal
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Futsal Scoreboard</Text>
      <ScoreCard team="A" score={teamAScore} onScoreChange={handleScoreChange} />
      <ScoreCard team="B" score={teamBScore} onScoreChange={handleScoreChange} />
      <ResetButton onReset={resetScores} />
      
      {/* Modal untuk menampilkan pesan kemenangan */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalBackground}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalText}>
              {winner === 'A' ? 'Tim A Menang!' : 'Tim B Menang!'}
            </Text>
            <TouchableOpacity onPress={resetScores} style={styles.closeButton}>
              <Text style={styles.closeButtonText}>Tutup</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f4f8', // Latar belakang lebih lembut
    padding: 20, // Memberikan sedikit jarak dari pinggir
  },
  title: {
    fontSize: 30,
    fontWeight: '700', // Menggunakan font bold
    marginBottom: 30,
    color: '#00008B', // Warna untuk judul
    textAlign: 'center',
    fontFamily: 'Arial', // Pilihan font yang lebih modern
  },
  // Modal
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Transparansi latar belakang modal
  },
  modalContainer: {
    backgroundColor: '#fff',
    padding: 25,
    borderRadius: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  closeButton: {
    backgroundColor: '#800000', // Warna untuk tombol tutup
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 25,
  },
  closeButtonText: {
    color: '#fff',
    fontSize: 25,
    fontWeight: '600',
  },
});
