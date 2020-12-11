import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
// import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import { StyleSheet, View, TextInput, Text, Switch, Image, Button } from 'react-native';

import WelcomeScreen from './app/screens/WelcomeScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';
import AppText from './app/components/AppText'
import AppButton from './app/components/AppButton'
import Card from './app/components/Card'
import MountainDetailsScreen from './app/screens/MountainDetailsScreen';
import MessagesScreen from './app/screens/MessagesScreen';
import Screen from './app/components/Screen';
import Icon from './app/components/Icon';
import ListItem from './app/components/ListItem';
import AccountScreen from './app/screens/AccountScreen';
import MountainsScreen from './app/screens/MountainsScreen';
import AppTextInput from './app/components/AppTextInput';
import AppPicker from './app/components/AppPicker';
import LoginScreen from './app/screens/LoginScreen';
import LoginScreenFormik from './app/screens/LoginScreenFormik';
import RegisterScreen from './app/screens/RegisterScreen';
import ImageInput from './app/components/ImageInput';
import ImageInputList from './app/components/ImageInputList';
import HikeEditScreen from './app/screens/HikeEditScreen';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from './app/navigation/AuthNavigator';
import { createStackNavigator } from  '@react-navigation/stack';
import navigationTheme from './app/navigation/navigationTheme';
import AppNavigator from './app/navigation/AppNavigator';




const categories = [
  { label: "All Mountains", value: 1 },
  { label: "Completed", value: 2 },
  { label: "Not Completed", value: 3 },
];

export default function App() {
  const [category, setCategory] = useState();
  const [imageUri, setImageUri] = useState();
  const [imageUris, setImageUris] = useState([]);

  // const requestPermission = async () => {
  //   const result = await ImagePicker.getCameraRollPermissionsAsync();
  //   if(!result.granted) alert("You must grant access to photo library. ")
  // }

  // useEffect(() => {
  //   requestPermission();
  // }, [])

  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync();
      if(!result.cancelled) setImageUri(result.uri)
    } catch (error) {
      console.log('error reading an image')
    }
  };

  const handleAdd = (uri) => {
    setImageUris([...imageUris, uri]);
  }
  const handleRemove = (uri) => {
    setImageUris(imageUris.filter(imageUri => imageUri !== uri));
  }

  return (

    <NavigationContainer theme={navigationTheme}>
      {/* <AuthNavigator /> */}
      <AppNavigator />
    </NavigationContainer>
    // <Screen>
    //   <AppPicker
    //     selectedItem={category}
    //     onSelectItem={(item)=> setCategory(item)}
    //     items={categories}
    //     icon="apps"
    //     placeholder='List View'
    //   />
    // </Screen>
    // <Screen>
    //   <ImageInput 
    //     imageUri={imageUri}
    //     onChangeImage={uri => setImageUri(uri)}
    //  />
    // </Screen>
    // <Screen>
    //   <ImageInputList
    //     imageUris={imageUris}
    //     onAddImage={uri => handleAdd(uri)}
    //     onRemoveImage={uri => handleRemove(uri)}
    //   />
    // </Screen>
    // <Screen>
    //  <MountainsScreen />
    //  <MountainDetailsScreen />
    //  <AccountScreen />
    //  <HikeEditScreen />
    // </Screen>
    // <Screen>
    //   <ImageInput />
    // </Screen>
    // <MountainsScreen />
    // <MountainDetailsScreen />
    // <AccountScreen />
    // <LoginScreenFormik />
    // <RegisterScreen />
    // <MessagesScreen />
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  card: {
    backgroundColor: "#f8f4f4",
    padding: 20,
    paddingTop: 100,
  },
})