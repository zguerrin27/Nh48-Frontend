import React, { useState } from 'react';
import { View, TextInput, StyleSheet, TouchableWithoutFeedback, Modal, Button, FlatList } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Screen from '../components/Screen';
import defaultStyles from '../config/styles';
import AppText from './AppText';
import PickerItem from './PickerItem';

function AppPicker({ icon, items, onSelectItem, selectedItem, placeholder, PickerItemComponent = PickerItem }) {
  const [modalVisable, setModalVisable] = useState(false);

  return (
    <React.Fragment>
      <TouchableWithoutFeedback onPress={() => setModalVisable(true)}>
        <View style={styles.container}>
          {icon && (
            <MaterialCommunityIcons 
              name={icon} 
              size={20} 
              color={defaultStyles.colors.medium} 
              style={styles.icon} 
            />
          )}
          <AppText style={styles.text}>{ selectedItem ? selectedItem.label : placeholder}</AppText>
          <MaterialCommunityIcons
            name='chevron-down'
            size={20}
            color={defaultStyles.colors.medium}
          />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={modalVisable} animationType='slide'>
        <Screen>
          <Button title='Close' onPress={() => setModalVisable(false)}/>
          <FlatList
            data={items}
            keyExtractor={item => item.value.toString()}
            renderItem={({ item }) => (
              <PickerItemComponent
                label={item.label}
                onPress={() => {
                  setModalVisable(false);
                  onSelectItem(item)
                }}
              />
            )} 
          />
        </Screen>
      </Modal>
    </React.Fragment>
  );
}

export default AppPicker;

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.colors.light,
    borderRadius: 25,
    flexDirection: 'row',
    width: '100%',
    padding: 15,
    marginVertical: 10
  },
  icon: {
    marginRight: 10,
  },
  text: {
    flex: 1
  }
})