import {View, StyleSheet, Button, Text} from 'react-native'
import { useState } from 'react';

import Board from './components/Board';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  const [board, setBoard] = useState({})
  const [turn, changeTurn] = useState(true)
  const [turns, setTurns] = useState(0)
  const [end, setEnd] = useState(true)
  const [message, setMessage] = useState('')

function check(cid){
  if(board[cid]) return 
  const winningCombs = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,4,8],
    [2,4,6],
    [0,3,6],
    [1,4,7],
    [2,5,8]
  ] 
  setTurns(prevTurns=>{
    return prevTurns+1
  })
  temp = board
  turn? temp[cid] = 'X': temp[cid] = 'O'
  setBoard(board)
  changeTurn(prevTurn=>{
    return !prevTurn
  })
  if(turns>=8){setEnd(false);setMessage("It was a Tie!")}
  for( let i =0; i<winningCombs.length; i++){
    let [a,b,c] = winningCombs[i];
    if(board[a] === board[b] && board[b] === board[c] && board[a]){
      setEnd(false);
      setMessage(`player ${board[a]} wins!`);
    }
  }
}


  function restartGame(){
    setBoard({});
    setEnd(true);
    setTurns(0);
    changeTurn(true);
    setMessage('');
  }

  return (
      <><Text style={styles.header}>Tic Tac Toe</Text>
    <View style={styles.container}>
      <Text style={styles.message}>{message}</Text>
      {end?<Board board={board} check={check} />:<Button title='Play Again' onPress={restartGame} />}
    </View>
    <StatusBar style='light'/></>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  message:{
    textAlign: 'center',
    fontSize: 42,
    marginBottom: 16
  },
  header:{
    textAlign: 'center',
    fontSize: 60,
    backgroundColor: 'black',
    color: 'white',
    paddingTop:22
  }
});
