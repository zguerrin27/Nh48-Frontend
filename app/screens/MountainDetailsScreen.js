import React from 'react';
import { View, StyleSheet, Image } from 'react-native';

import AppText from '../components/AppText';
import colors from '../config/colors';
import ListItem from '../components/ListItem';

function MountainDetailsScreen({ route }) {
  const mountain = route.params;
  return (
    <View>
      <Image style={styles.image} source={mountain.image} />
      <View style={styles.detailsContainer}>
      <AppText style={styles.title}>{mountain.title}</AppText>
        <AppText style={styles.elevation}>{mountain.height}</AppText>
        <View style={styles.userContainer}>
          <ListItem 
            image={require("../assets/Zach-headshot2.jpg")}
            title="Zach Guerrin"
            subTitle="Mountain Count: 8" 
          />
        </View>
      </View>
    </View>
  );
}

export default MountainDetailsScreen;

const styles = StyleSheet.create({
  elevation: {
    color: colors.secondary,
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 10
  },
  detailsContainer: {
    padding: 20
  },
  image: {
    width: "100%",
    height: 300
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
  },
  userContainer: {
    marginVertical: 40
  }

})
