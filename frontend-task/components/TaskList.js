import { View, Text, FlatList } from 'react-native';
import React from 'react';

const TaskList = ({ tasks }) => {
  return (
    <FlatList 
      data={tasks}
      keyExtractor={(item) => item.id + ''}
      renderItem={({ item }) => {
        return (
          <Text>{item.title}</Text>
        );
      }}
    />
  );
}

export default TaskList;
