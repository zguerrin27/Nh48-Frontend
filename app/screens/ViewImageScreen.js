import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'

import colors from '../config/colors'

function ViewImageScreen(props) {
  return (
    <View style={styles.container}>
      <View style={styles.closeIcon}>
        <MaterialCommunityIcons 
          name="close" 
          color="white" 
          size={40} 
        />
      </View>
      <View style={styles.deleteIcon}>
        <MaterialCommunityIcons 
          name="trash-can-outline" 
          color="white" 
          size={40} 
        />
      </View>
      <Image 
      style={styles.image} 
      source={require('../assets/MtWashington.jpg')}
      resizeMode="contain"/> 
    </View>
  );
}

const styles = StyleSheet.create({
  closeIcon: {
    position: "absolute",
    top: 50,
    left: 40
  },
  container: {
    backgroundColor: colors.black,
    flex: 1
  },
  deleteIcon: {
    position: "absolute",
    top: 50,
    right: 40
  },
  image: {
    width: "100%",
    height: "100%"
  },
})

export default ViewImageScreen;