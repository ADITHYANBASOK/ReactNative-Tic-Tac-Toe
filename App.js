import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Board from './Src/Components/Board';
import MainMenu from './Src/Screens/MainMenu';
import { UI_MARGIN } from './Src/Design';


export default function App() {
  const [isPlay ,setPlay] =useState(false);
  return (
    <View style={styles.app}>
      {isPlay ? <Board setPlay={setPlay}/> :<MainMenu setPlay={setPlay}/>}
      
    </View>
  );
}

const styles = StyleSheet.create({
  app: {
    flex: 0.95,
    margin:UI_MARGIN,
    justifyContent: 'center',
  },
});
