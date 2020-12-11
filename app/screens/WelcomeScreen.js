import React from 'react';
import { ImageBackground, StyleSheet, View, Image, _Text, Text } from 'react-native';

import AppButton from '../components/AppButton';
import routes from '../navigation/routes';

function WelcomeScreen({ navigation }) {
  return (
    <ImageBackground source={require('../assets/Main-WP.jpg')}
    style={styles.background}>
    <View style={styles.logoContainer}>
      <Image style={styles.logo} source={require('../assets/Logo.png')} />
      <Text style={styles.tagline}>Get Out There</Text>
    </View>
    <View style={styles.buttonContainer}>
      <AppButton title="Login" onPress={() => navigation.navigate(routes.LOGIN)} />
      <AppButton title="Register" color="secondary" onPress={() => navigation.navigate(routes.REGISTER)} />
    </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  buttonContainer: {
    padding: 20,
    width: "100%",
  },
  logo: {
    width: 200,
    height: 200,
  },
  logoContainer: {
    position: "absolute",
    top: 90,
    alignItems: "center"
  },
  tagline: {
    fontSize: 20,
    fontWeight: "600",
    paddingVertical: 10,
  },
})

export default WelcomeScreen;