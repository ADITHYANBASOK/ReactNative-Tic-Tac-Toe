import { StyleSheet, Text, View,TouchableOpacity } from "react-native";
import React from "react";
import { BUTTON_CLEAR_SCORE_COLOR, BUTTON_RESTART_COLOR } from "../Design";


const Actions = ({ isRestart, restart, clearScore }) => {
  return (
    <View style={styles.view}>
      <View style={styles.viewRow}>
        <TouchableOpacity
          style={[styles.button, styles.restart]}
          onPress={restart}
        >
          <Text style={styles.text}>Restart</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, styles.clearScore]}
          onPress={clearScore}
        >
          <Text style={styles.text}>Clear Score</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Actions;

const styles = StyleSheet.create({
  view: {
    flexDirection: "column",
    alignItems: "center",
  },
  viewRow: { flexDirection: "row" },
  button: {
    marginTop: 30,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 3,
    marginHorizontal: 20,
  },
  restart: {
    backgroundColor: BUTTON_RESTART_COLOR,
  },
  clearScore: {
    backgroundColor: BUTTON_CLEAR_SCORE_COLOR,
  },
  text: {
    fontSize: 19,
    color: "white",
  },
});
