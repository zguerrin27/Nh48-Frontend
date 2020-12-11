import React from 'react';
import Constants from 'expo-constants';
import { StyleSheet, SafeAreaView, View, Platform, StatusBar } from 'react-native';


function Screen({ children, style }) {
  return (
    <SafeAreaView style={[styles.screen, style]}>
      <View style={[styles.view, style]}>
        {children}
      </View>
    </SafeAreaView>
  );
}

export default Screen;

const styles = StyleSheet.create({
  screen: {
    // paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,   // same as below
    paddingTop: Constants.statusBarHeight,
    flex: 1,   // this makes screen component flex to entire heigth of display
  },
  view: {
    flex: 1,
  }
})