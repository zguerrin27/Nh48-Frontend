import React, { useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

import ListItem from '../components/ListItem';
import Screen from '../components/Screen';
import ListItemSeparator from '../components/ListItemSeparator';
import ListItemDeleteAction from '../components/ListItemDeleteAction';

const initialMessages = [
  {
    id: 1,
    title: 'T1',
    description: 'D1',
    image: require('../assets/Zach-headshot2.jpg')
  },
  {
    id: 2,
    title: 'T2',
    description: 'D2',
    image: require('../assets/Zach-headshot2.jpg')
  }
]

function MessagesScreen(props) {
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = message => {
    // delete message from messages 
    const newMessages = messages.filter(m => m.id !== message.id);
    setMessages(newMessages)
  }

  return (
    <Screen>
      <FlatList 
        data={messages}
        keyExtractor={ (message) => {message.id.toString()} }
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => console.log("Message Selected", item)}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator} //takes the FUNCTIONAL component // not a class component
        refreshing={refreshing}
        onRefresh={() => {
          setMessages([
            {
              id: 3,
              title: 'T3',
              description: 'D3',
              image: require('../assets/Zach-headshot2.jpg')
            }
          ])
        }} 
      />
    </Screen>
  );
}

export default MessagesScreen;

const styles = StyleSheet.create({

})