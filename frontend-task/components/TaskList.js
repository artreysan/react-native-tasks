import { FlatList, RefreshControl } from 'react-native';
import React, {useState, useEffect} from 'react';
import {getTasks, deleteTask} from '../api.js';
import Taskitem from './TaskItem.js'
import { useIsFocused } from '@react-navigation/native';


const TaskList = () => {

  const [tasks, setTasks] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  
  const loadTasks = async () => {
    const data = await getTasks();
    setTasks(data);
  }

  const isfocused = useIsFocused();

  useEffect(() => {
    loadTasks();
  }, [isfocused]);

  const onRefresh = async ()=>{
      setRefreshing(true);
      await loadTasks();
      setRefreshing(false);
    }
  
    const handleDelete = async (id) => {
      await deleteTask(id);
      await loadTasks();
    }

  const renderItem = ({item}) =>{
    return (
      <Taskitem task={item} handleDelete={handleDelete}></Taskitem>
        );
  };

  return (
    <FlatList 
      style={{width: '100%'}}
      data={tasks}
      keyExtractor={(item) => item.id + ''}
      renderItem={renderItem}
      refreshControl={
        <RefreshControl
        colors={["#78e08f"]}
        refreshing = {refreshing}
        onRefresh={onRefresh}
        />
      }
    />
  );
}

export default TaskList;
