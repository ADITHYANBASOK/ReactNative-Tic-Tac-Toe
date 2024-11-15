  import { StyleSheet, Text, View } from 'react-native';
  import React from 'react';
  
  const Info = ({ score, status }) => {
    return (
      <View>
        <View style={styles.view}>
          <View style={styles.score}>
            <Text style={styles.scoreTitle}>X:</Text>
            <Text style={styles.scoreTitle}>{score.x}</Text>
          </View>
          <View style={[styles.score, styles.right]}>
            <Text style={styles.scoreTitle}>O:</Text>
            <Text style={styles.scoreTitle}>{score.o}</Text>
          </View>
        </View>
        <Text style={styles.status}>{status}</Text>
      </View>
    );
  };
  
  export default Info;
  
  const styles = StyleSheet.create({
    view: {
      width: '98%',
      flexDirection: 'row',
      justifyContent: 'space-between', 
      paddingHorizontal: 10,
      marginTop: 20,
    },
    scoreTitle: {
      fontWeight: 'bold',
      fontSize: 20,
      letterSpacing: 2,
    },
    score: {
      fontSize: 23,
      flexDirection: 'row',
      alignItems: 'center',
    },
    right: {
      alignItems: 'flex-end', 
    },
    status: {
      textAlign: 'center',
      padding: 20,
      fontSize: 25,
    },
  });
  