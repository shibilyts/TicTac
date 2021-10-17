import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';
import AppStyles from '../../config/styles';
import { useSelector } from 'react-redux';

export default function ScoreBoard() {
  const scoreState = useSelector(state => state.scoreReducer);
  return (
    <View style={styles.container}>
      <View style={styles.headerView}>
        <Text style={styles.headerText}>YOU</Text>
        <Text style={styles.scoreText}>{scoreState.user}</Text>
      </View>
      <View style={styles.headerView}>
        <Text style={styles.headerText}>Computer</Text>
        <Text style={styles.scoreText}>{scoreState.computer}</Text>
      </View>
      <View style={styles.headerView}>
        <Text style={styles.headerText}>Draw</Text>
        <Text style={styles.scoreText}>{scoreState.draw}</Text>
      </View>
    </View>
  );
}
