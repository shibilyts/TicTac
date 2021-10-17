import React, { useEffect, useState } from 'react';
import { View, FlatList, TouchableOpacity, Text, Alert } from 'react-native';
import styles from './styles';
import constants from '../../config/constants';
import CustomModal from '../../components/successModal';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AppStyles from '../../config/styles';
import * as loginActions from 'app/actions/loginActions';
import * as scoreActions from 'app/actions/scoreActions';
import { useDispatch, useSelector } from 'react-redux';
const arr = new Array(3 ** 2).fill(0);
export default function Home() {
  const dispatch = useDispatch();
  const scoreState = useSelector(state => state.scoreReducer);
  const onLogout = () => dispatch(loginActions.logOut());
  const userScoreUpdate = score =>
    dispatch(scoreActions.updateUserScore(score));
  const computerScoreUpdate = score =>
    dispatch(scoreActions.updateMachineScore(score));
  const drawScoreUpdate = score =>
    dispatch(scoreActions.updateDrawScore(score));
  const [grid, setGrid] = useState(arr);
  const [players, setPlayers] = useState({
    human: constants.PLAYER_1,
    computer: constants.COMPUTER,
  });
  const [winner, setWinner] = useState(null);
  const [showModal, toggleSetModal] = useState(false);
  const [gameState, setGameState] = useState(constants.GAME_STATES.notStarted);

  useEffect(() => {
    const winner = getWinner(grid);
    const declareWinner = winner => {
      let winnerStr;
      switch (winner) {
        case constants.PLAYER_1:
          winnerStr = 'Congratulations for winning the game!';
          break;
        case constants.COMPUTER:
          winnerStr = 'Sorry you lost!';
          break;
        case constants.DRAW:
        default:
          winnerStr = "It's a draw!";
      }
      updateScore(winner);
      toggleSetModal(true);
      setGameState(constants.GAME_STATES.over);
      setWinner(winnerStr);
      // setGrid(arr);
    };

    if (winner !== null && gameState !== constants.GAME_STATES.over) {
      declareWinner(winner);
    }
  }, [gameState, grid]);

  const updateScore = winner => {
    switch (winner) {
      case constants.PLAYER_1:
        userScoreUpdate(scoreState.user + 1);
        break;
      case constants.COMPUTER:
        computerScoreUpdate(scoreState.computer + 1);
        break;
      case constants.DRAW:
      default:
        drawScoreUpdate(scoreState.computer + 1);
    }
  };
  const renderSquire = ({ item, index }) => {
    return (
      <TouchableOpacity
        style={styles.itemStyle}
        onPress={() => humanMove(index)}>
        {item !== 0 && (
          <Text style={styles.itemText}>{item === 1 ? 'X' : 'O'}</Text>
        )}
      </TouchableOpacity>
    );
  };
  const move = (index, player) => {
    setGrid(grid => {
      const gridCopy = grid.concat();
      gridCopy[index] = player;
      return gridCopy;
    });
  };
  const computerMove = () => {
    let index = getRandomInt(0, 8);
    while (grid[index]) {
      index = getRandomInt(0, 8);
    }
    if (grid[index] === 0) {
      move(index, players.computer);
    }
  };
  const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  const humanMove = index => {
    if (grid[index] === 0) {
      move(index, players.human);
      computerMove();
    }
  };
  const getWinner = (grid = this.grid) => {
    const winningCombos = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    let res = null;
    winningCombos.forEach((el, i) => {
      if (
        grid[el[0]] !== 0 &&
        grid[el[0]] === grid[el[1]] &&
        grid[el[0]] === grid[el[2]]
      ) {
        res = grid[el[0]];
      } else if (res === null && getEmptySquares(grid).length === 0) {
        res = 3;
      }
    });
    return res;
  };
  const getEmptySquares = (grid = grid) => {
    let squares = [];
    grid.forEach((square, i) => {
      if (square === 0) squares.push(i);
    });
    return squares;
  };
  const onReplayPress = () => {
    toggleSetModal(false);
    setGameState(constants.GAME_STATES.notStarted);
    setGrid(arr);
    setWinner('');
  };
  const onExitPress = () => {
    toggleSetModal(false);
    setGameState(constants.GAME_STATES.notStarted);
    setGrid(arr);
    setWinner('');
    onLogout();
  };
  const exitAlert = () => {
    Alert.alert('Please confirm!', 'Are you sure you want to exit this game?', [
      {
        text: 'No',
        onPress: () => {},
        style: 'cancel',
      },
      { text: 'Yes', onPress: () => onExitPress() },
    ]);
  };
  return (
    <View style={styles.container}>
      <CustomModal modalVisibility={showModal}>
        <View style={styles.modalContainerView}>
          <Text style={styles.modalWinnerText}>{winner}</Text>
          <View style={styles.modalRowView}>
            <TouchableOpacity
              style={styles.closeButtonModal}
              onPress={() => onExitPress()}>
              <MaterialIcons
                size={50}
                color={AppStyles.color.COLOR_WHITE}
                name="close"
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.modalReplayButton}
              onPress={() => onReplayPress()}>
              <MaterialIcons
                size={50}
                color={AppStyles.color.COLOR_WHITE}
                name="replay"
              />
            </TouchableOpacity>
          </View>
        </View>
      </CustomModal>
      <FlatList
        contentContainerStyle={styles.flatlist}
        numColumns={3}
        data={grid}
        bounces={false}
        renderItem={renderSquire}
        keyExtractor={(item, index) => index.toString()}
      />
      <TouchableOpacity
        style={styles.bottomCloseButton}
        onPress={() => exitAlert()}>
        <MaterialIcons
          size={24}
          color={AppStyles.color.COLOR_WHITE}
          name="close"
        />
        <Text style={styles.bottomButtonText}>Close game</Text>
      </TouchableOpacity>
    </View>
  );
}
