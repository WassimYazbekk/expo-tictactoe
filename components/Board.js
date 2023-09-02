import { View, StyleSheet } from 'react-native'
import React from 'react'

import Cell from './Cell'


const Board = ({board, check}) => {

  return (
    <View style={styles.conctainer}>
      <View style={styles.row}>
        <Cell cid={0} cellContent={board[0]} check={check} />
        <Cell cid={1} cellContent={board[1]} check={check} />
        <Cell cid={2} cellContent={board[2]} check={check} />
      </View>
      <View style={styles.row}>
        <Cell cid={3} cellContent={board[3]} check={check} />
        <Cell cid={4} cellContent={board[4]} check={check} />
        <Cell cid={5} cellContent={board[5]} check={check} />
      </View>
      <View style={styles.row}>
        <Cell cid={6} cellContent={board[6]} check={check} />
        <Cell cid={7} cellContent={board[7]} check={check} />
        <Cell cid={8} cellContent={board[8]} check={check} />
      </View>
    </View>
  )
}

export default Board

const styles = StyleSheet.create({
  conctainer:{
    backgroundColor: 'black',
    padding: 2
  },
  row:{
    flexDirection: 'row'
  }
})