import { View, Text, FlatList } from 'react-native';
import React from 'react';
import Taskitem from './TaskItem.js'


const TaskList = ({ tasks }) => {

  const renderItem = ({item}) =>{
    return (
      <Taskitem task={item}></Taskitem>
        );
  };

  return (
    <FlatList 
      style={{width: '100%'}}
      data={tasks}
      keyExtractor={(item) => item.id + ''}
      renderItem={renderItem}
    />
  );
}

export default TaskList;
