import { View, Text, Pressable, StyleSheet, Dimensions } from 'react-native'
import React from 'react'

const Cell = ({cellContent, cid, check}) => {
  return (
    <Pressable onPress={()=>check(cid)} >
        <View style={styles.container}>
            <Text style={styles.text}>
                {cellContent && cellContent}
            </Text>
        </View>
    </Pressable>
  )
}

export default Cell
const width = Dimensions.get('screen').width
const styles = StyleSheet.create({
    container:{
        height: width/5,
        width: width/5,
        borderWidth: 2,
        margin: 1,
        alignContent: 'center',
        justifyContent: 'center',
        backgroundColor: 'white'
    },
    text:{
        fontSize: 32,
        color: 'black',
        textAlign: 'center',
        fontWeight: 'bold'
    }
})