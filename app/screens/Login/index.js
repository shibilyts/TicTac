import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Text, Button } from 'react-native-paper';

import { useDispatch, useSelector } from 'react-redux';
import * as loginActions from 'app/actions/loginActions';
import styles from './styles';
import AppStyles from '../../config/styles';
import { navigationRef } from '../../navigation/NavigationService';

export default function Login(props) {
  const id = useSelector(state => state.loginReducer.id);
  const dispatch = useDispatch();
  const onLogin = () => dispatch(loginActions.requestLogin('test', '1234'));
  const openScoreBoard = () => {navigationRef.current.navigate('ScoreBoard')}
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.enterGame} onPress={() => onLogin()}>
        <Text style={styles.buttonText}>Enter Game</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.scoreButton} onPress={() => openScoreBoard()}>
        <Text style={styles.buttonText}>Score board</Text>
      </TouchableOpacity>
    </View>
  );
}
